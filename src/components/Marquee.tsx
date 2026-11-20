export function Marquee({ items }: { items: readonly string[] }) {
  const track = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-5 font-mono text-[0.78rem] tracking-wide whitespace-nowrap text-sand-100/65">
            {item}
          </span>
          <span className="size-1.5 rounded-full bg-clay-500/70" aria-hidden="true" />
        </span>
      ))}
    </div>
  )

  return (
    <div className="mask-fade-x relative overflow-hidden border-y border-sand-100/10 bg-navy-950 py-3.5">
      <div className="flex w-max marquee-track" aria-hidden="true">
        {track}
        {track}
      </div>
      <p className="sr-only">
        Outils et logiciels maîtrisés : {items.join(', ')}.
      </p>
    </div>
  )
}
