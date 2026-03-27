import type { ReactNode } from 'react'
import Card from './Card'
import ScrollReveal from './ScrollReveal'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface FeatureGridProps {
  features: Feature[]
  columns?: 2 | 3
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={`grid gap-5 ${
        columns === 3
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2'
      }`}
    >
      {features.map((f, i) => (
        <ScrollReveal key={i} delay={i * 80}>
          <Card icon={f.icon} title={f.title} description={f.description} />
        </ScrollReveal>
      ))}
    </div>
  )
}
