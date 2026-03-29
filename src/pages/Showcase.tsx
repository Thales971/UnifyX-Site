import ScrollReveal from '../components/ScrollReveal'
import { Button } from '../components/ui/Button'
import { ExternalLink } from 'lucide-react'

export default function Showcase() {
  const projects = [
    { title: 'unifyOS', author: 'unifyX Team', type: 'Sistema Operacional', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Nexus Engine', author: 'Game Corp', type: 'Game Engine 3D', img: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=800' },
    { title: 'Hyper DB', author: 'Data Labs', type: 'Banco de Dados', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800' },
    { title: 'Specter Desktop', author: 'UX Inc', type: 'App Desktop', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
  ]

  return (
    <div className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-dark mb-6">
              Construído com <span className="text-gradient">unifyX</span>
            </h1>
            <p className="text-lg text-neutral-dark/60 leading-relaxed">
              Descubra aplicativos, sistemas operacionais e engines construídos com performance absurda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden border border-neutral/20 bg-surface shadow-md hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold font-display text-neutral-dark">{p.title}</h3>
                      <p className="text-sm text-primary font-semibold">{p.type}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8! w-8!">
                      <ExternalLink size={16} />
                    </Button>
                  </div>
                  <p className="text-neutral-dark/60 text-sm mt-4">Autor: {p.author}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
