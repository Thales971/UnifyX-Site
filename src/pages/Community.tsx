import {
  GitBranch as GithubIcon, MessageCircle, Send as TwitterIcon, Mail,
  Users, Star, Download, GitCommit,
  Heart, BookOpen, FileText, ArrowRight,
  ExternalLink
} from 'lucide-react'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

const channels = [
  {
    icon: GithubIcon,
    name: 'GitHub',
    description: 'Código fonte, issues e pull requests',
    link: '#',
    badge: '2.4k stars',
    badgeColor: 'bg-accent/10 text-accent',
  },
  {
    icon: MessageCircle,
    name: 'Discord',
    description: 'Chat em tempo real com a comunidade',
    link: '#',
    badge: '1.2k membros',
    badgeColor: 'bg-[#5865F2]/10 text-[#5865F2]',
  },
  {
    icon: TwitterIcon,
    name: 'Twitter / X',
    description: 'Atualizações, dicas e novidades',
    link: '#',
    badge: '@unifyx',
    badgeColor: 'bg-[#1DA1F2]/10 text-[#1DA1F2]',
  },
  {
    icon: Mail,
    name: 'Email',
    description: 'Contato direto com o time core',
    link: 'mailto:hello@unifyx.dev',
    badge: 'hello@unifyx.dev',
    badgeColor: 'bg-primary/10 text-primary',
  },
]

const stats = [
  { icon: Users, value: '156', label: 'Contributors' },
  { icon: Star, value: '2.4k', label: 'GitHub Stars' },
  { icon: Download, value: '18k', label: 'Downloads' },
  { icon: GitCommit, value: '3.2k', label: 'Commits' },
]

const contributions = [
  {
    icon: BookOpen,
    title: 'Guia de Contribuição',
    description: 'Aprenda como contribuir para o unifyX, desde reportar bugs até enviar PRs.',
  },
  {
    icon: Heart,
    title: 'Code of Conduct',
    description: 'Nosso compromisso com uma comunidade inclusiva e respeitosa.',
  },
  {
    icon: FileText,
    title: 'Roadmap Público',
    description: 'Veja o que está planejado e vote nas features que importam para você.',
  },
]

const showcaseProjects = [
  {
    title: 'unifyX Dashboard',
    author: 'Core Team',
    description: 'Dashboard admin completo construído inteiramente com unifyX.',
    tags: ['Web', 'Dashboard'],
  },
  {
    title: 'UniChat',
    author: 'Comunidade',
    description: 'App de chat em tempo real multiplataforma.',
    tags: ['Mobile', 'Real-time'],
  },
  {
    title: 'DataViz Pro',
    author: 'Comunidade',
    description: 'Biblioteca de visualização de dados com performance extrema.',
    tags: ['Biblioteca', 'Charts'],
  },
]

export default function Community() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comunidade</span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-accent mt-3 mb-6">
              Construa o Futuro Conosco
            </h1>
            <p className="text-lg text-accent/50 max-w-2xl mx-auto">
              Junte-se a milhares de desenvolvedores que estão moldando a próxima geração de programação.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-accent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 100}>
                <div className="text-center">
                  <s.icon size={24} className="mx-auto text-primary mb-3" />
                  <div className="text-3xl font-display font-bold text-white">{s.value}</div>
                  <div className="text-sm text-white/40 mt-1">{s.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Canais</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                Onde Nos Encontrar
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {channels.map((ch, i) => (
              <ScrollReveal key={ch.name} delay={i * 80}>
                <a
                  href={ch.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-white border border-neutral/30 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors shrink-0">
                    <ch.icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-semibold text-accent">{ch.name}</h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${ch.badgeColor}`}>
                        {ch.badge}
                      </span>
                    </div>
                    <p className="text-sm text-accent/50">{ch.description}</p>
                  </div>
                  <ExternalLink size={16} className="text-accent/20 group-hover:text-primary transition-colors shrink-0 mt-1" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="py-24 lg:py-32 bg-neutral-light/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contribua</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                Como Participar
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {contributions.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white border border-neutral/30 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                  <c.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-display font-semibold text-accent mb-2">{c.title}</h3>
                  <p className="text-sm text-accent/50 leading-relaxed">{c.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Showcase</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                Projetos da Comunidade
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {showcaseProjects.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div className="group rounded-2xl bg-white border border-neutral/30 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-accent mb-1">{p.title}</h3>
                    <p className="text-xs text-accent/40 mb-2">por {p.author}</p>
                    <p className="text-sm text-accent/50 mb-4">{p.description}</p>
                    <div className="flex gap-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-primary/8 text-primary text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-cta">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Junte-se à Revolução
            </h2>
            <p className="text-white/50 mb-8">
              Contribua com código, documentação, design ou simplesmente faça parte da conversa.
            </p>
            <a href="https://github.com/unifyx" target="_blank" rel="noopener noreferrer">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                Começar a Contribuir
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
