import { Check, Clock, Eye, Rocket } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

interface Phase {
  number: number
  title: string
  timeframe: string
  status: 'progress' | 'planned' | 'vision'
  items: string[]
}

interface RoadmapProps {
  phases: Phase[]
}

const statusConfig = {
  progress: {
    icon: Rocket,
    badge: 'Em Progresso',
    color: 'bg-primary text-white',
    dotColor: 'bg-primary',
    lineColor: 'bg-primary',
  },
  planned: {
    icon: Clock,
    badge: 'Planejado',
    color: 'bg-secondary text-accent',
    dotColor: 'bg-secondary',
    lineColor: 'bg-neutral',
  },
  vision: {
    icon: Eye,
    badge: 'Visão',
    color: 'bg-accent-light text-white',
    dotColor: 'bg-accent-light',
    lineColor: 'bg-neutral',
  },
}

export default function Roadmap({ phases }: RoadmapProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-neutral/40 -translate-x-1/2" />

      <div className="space-y-12">
        {phases.map((phase, i) => {
          const cfg = statusConfig[phase.status]
          const Icon = cfg.icon
          const isLeft = i % 2 === 0

          return (
            <ScrollReveal key={phase.number} delay={i * 120}>
              <div className={`relative flex items-start gap-8 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full ${cfg.dotColor} flex items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-16 lg:ml-0 lg:w-[calc(50%-3rem)] ${
                  isLeft ? 'lg:pr-0' : 'lg:pl-0'
                }`}>
                  <div className="p-6 rounded-2xl bg-white border border-neutral/30 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cfg.color}`}>
                        {cfg.badge}
                      </span>
                      <span className="text-xs text-accent/40 font-mono">{phase.timeframe}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-accent mb-3">
                      Fase {phase.number}: {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-accent/60">
                          <Check size={14} className="text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
