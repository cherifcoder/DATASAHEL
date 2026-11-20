import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { site } from '../data/site'
import { cn } from '../lib/utils'

type Fields = {
  name: string
  email: string
  organisation: string
  subject: string
  message: string
}

const initial: Fields = {
  name: '',
  email: '',
  organisation: '',
  subject: '',
  message: '',
}

const subjects = [
  'Demande de devis',
  'Formation ou atelier',
  'Collecte de données',
  'Analyse & visualisation',
  'Suivi-évaluation',
  'Autre demande',
]

const inputClass =
  'w-full rounded-xl border border-ink/15 bg-sand-50 px-4 py-3 text-[0.9rem] text-ink placeholder:text-ink/70 transition-colors focus:border-clay-500 focus:ring-2 focus:ring-clay-500/15 focus:outline-none'

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({})
  const [sent, setSent] = useState(false)

  const update = (key: keyof Fields) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [key]: event.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {}
    if (fields.name.trim().length < 2) next.name = 'Indiquez votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
      next.email = 'Indiquez une adresse e-mail valide.'
    if (!fields.subject) next.subject = 'Choisissez un objet.'
    if (fields.message.trim().length < 10) next.message = 'Décrivez votre besoin en quelques mots (10 caractères min.).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const mailtoHref = () => {
    const body = [
      `Nom : ${fields.name}`,
      `E-mail : ${fields.email}`,
      fields.organisation ? `Organisation : ${fields.organisation}` : '',
      '',
      fields.message,
    ]
      .filter(Boolean)
      .join('\n')
    return `mailto:${site.email}?subject=${encodeURIComponent(
      `[${fields.subject}] — ${fields.name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setSent(true)
    window.location.href = mailtoHref()
  }

  return (
    <div className="relative rounded-2xl border border-ink/10 bg-sand-50 p-6 shadow-[0_30px_70px_-50px_rgba(12,42,69,0.4)] sm:p-8">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[26rem] flex-col items-center justify-center py-10 text-center"
          >
            <span className="grid size-14 place-items-center rounded-full bg-clay-500/10">
              <CheckCircle2 className="size-7 text-clay-600" strokeWidth={1.8} />
            </span>
            <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
              Votre message est prêt !
            </h3>
            <p className="mt-3 max-w-sm text-[0.92rem] leading-relaxed text-ink/70">
              Votre logiciel de messagerie devrait s’ouvrir avec le message prérempli. Si ce n’est
              pas le cas, écrivez-nous directement :
            </p>
            <a
              href={mailtoHref()}
              className="mt-4 text-[0.92rem] font-medium text-clay-600 underline decoration-clay-500/40 underline-offset-4 transition hover:decoration-clay-500"
            >
              {site.email}
            </a>
            <button
              type="button"
              onClick={() => {
                setSent(false)
                setFields(initial)
              }}
              className="mt-8 text-[0.8rem] text-ink/70 underline underline-offset-4 transition hover:text-ink"
            >
              Rédiger un autre message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            onSubmit={onSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-semibold text-ink">Écrivez-nous</h2>
              <span className="font-mono text-[0.6rem] tracking-[0.14em] text-ink/70 uppercase">
                Réponse sous 24 h
              </span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Votre nom" htmlFor="name" required error={errors.name}>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={fields.name}
                  onChange={update('name')}
                  placeholder="Aïssata Traoré"
                  className={cn(inputClass, errors.name && 'border-red-500/60')}
                />
              </Field>
              <Field label="Votre e-mail" htmlFor="email" required error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={update('email')}
                  placeholder="vous@organisation.org"
                  className={cn(inputClass, errors.email && 'border-red-500/60')}
                />
              </Field>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Organisation" htmlFor="organisation">
                <input
                  id="organisation"
                  name="organisation"
                  autoComplete="organization"
                  value={fields.organisation}
                  onChange={update('organisation')}
                  placeholder="ONG, université, PME…"
                  className={inputClass}
                />
              </Field>
              <Field label="Objet" htmlFor="subject" required error={errors.subject}>
                <select
                  id="subject"
                  name="subject"
                  value={fields.subject}
                  onChange={update('subject')}
                  className={cn(inputClass, 'appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10', errors.subject && 'border-red-500/60')}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%230F2436' stroke-width='1.6'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")",
                  }}
                >
                  <option value="" disabled>
                    Choisir un objet
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Votre message" htmlFor="message" required error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={fields.message}
                onChange={update('message')}
                placeholder="Décrivez votre projet, vos données, vos échéances…"
                className={cn(inputClass, 'resize-y', errors.message && 'border-red-500/60')}
              />
            </Field>

            <p className="text-[0.72rem] leading-relaxed text-ink/70">
              En envoyant ce message, vous acceptez d’être contacté par DataSahel au sujet de votre
              demande. Vos informations ne sont jamais partagées.
            </p>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-clay-600 px-6 py-3.5 text-[0.92rem] font-medium text-sand-50 shadow-[0_14px_34px_-16px_rgba(185,77,21,0.8)] transition-all duration-300 hover:bg-navy-900"
            >
              Envoyer le message
              <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1 text-[0.78rem] font-medium text-ink/70"
      >
        {label}
        {required && <span className="text-clay-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[0.72rem] text-red-600">
          <AlertCircle className="size-3.5" /> {error}
        </p>
      )}
    </div>
  )
}
