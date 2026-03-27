import type { ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export default function Card({ icon, title, description, className = '' }: CardProps) {
  return (
    <div
      className={`
        group relative p-6 rounded-2xl bg-white border border-neutral/40
        hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
        hover:-translate-y-1 transition-all duration-300
        ${className}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {icon && (
          <div className="mb-4 w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="font-display font-semibold text-lg text-accent mb-2">{title}</h3>
        <p className="text-sm text-accent/60 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
