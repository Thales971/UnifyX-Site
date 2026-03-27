import ScrollReveal from './ScrollReveal'

interface Row {
  aspect: string
  react: string
  unifyx: string
}

interface ComparisonTableProps {
  rows: Row[]
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  return (
    <ScrollReveal>
      <div className="overflow-x-auto rounded-2xl border border-neutral/40 shadow-lg">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-accent text-white">
              <th className="px-6 py-4 text-left font-display font-semibold">Aspecto</th>
              <th className="px-6 py-4 text-left font-display font-semibold">React</th>
              <th className="px-6 py-4 text-left font-display font-semibold">
                <span className="text-primary">unifyX</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-neutral/20 transition-colors hover:bg-primary/3 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-neutral-light/30'
                }`}
              >
                <td className="px-6 py-4 font-medium text-accent">{row.aspect}</td>
                <td className="px-6 py-4 text-accent/60">{row.react}</td>
                <td className="px-6 py-4 text-primary font-semibold">{row.unifyx}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  )
}
