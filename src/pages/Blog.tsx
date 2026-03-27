import { useState } from 'react'
import { Calendar, User, ArrowRight, Tag, Clock, Mail } from 'lucide-react'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Por que unifyX é 10x mais rápido que React',
    excerpt: 'Uma análise detalhada da arquitetura de compilação AOT e reatividade granular que tornam o unifyX dramaticamente mais rápido.',
    author: 'Core Team',
    date: '20 Mar 2026',
    readTime: '8 min',
    category: 'Performance',
    featured: true,
  },
  {
    id: 2,
    title: 'Compilando para WASM com unifyX',
    excerpt: 'Tutorial passo a passo sobre como compilar seus componentes unifyX para WebAssembly otimizado.',
    author: 'Core Team',
    date: '15 Mar 2026',
    readTime: '6 min',
    category: 'Tutorial',
  },
  {
    id: 3,
    title: 'Desenvolvendo para iOS com unifyX',
    excerpt: 'Conheça o pipeline de compilação nativa do unifyX para dispositivos Apple.',
    author: 'Comunidade',
    date: '10 Mar 2026',
    readTime: '10 min',
    category: 'Mobile',
  },
  {
    id: 4,
    title: 'unifyOS: O futuro dos sistemas operacionais',
    excerpt: 'Uma visão aprofundada sobre como o unifyX pode ser a base de um sistema operacional modular e seguro.',
    author: 'Core Team',
    date: '05 Mar 2026',
    readTime: '12 min',
    category: 'Visão',
  },
  {
    id: 5,
    title: 'Interoperabilidade com Rust em unifyX',
    excerpt: 'Aprenda a chamar código Rust diretamente do unifyX com zero overhead de FFI.',
    author: 'Comunidade',
    date: '28 Feb 2026',
    readTime: '7 min',
    category: 'Interop',
  },
]

const categories = [
  { name: 'Todos', count: posts.length },
  { name: 'Performance', count: 1 },
  { name: 'Tutorial', count: 1 },
  { name: 'Mobile', count: 1 },
  { name: 'Visão', count: 1 },
  { name: 'Interop', count: 1 },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [email, setEmail] = useState('')

  const filtered = activeCategory === 'Todos'
    ? posts
    : posts.filter((p) => p.category === activeCategory)

  const featured = posts.find((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured || activeCategory !== 'Todos')

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Blog</span>
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-accent mt-3 mb-6">
              Blog unifyX
            </h1>
            <p className="text-lg text-accent/50 max-w-2xl mx-auto">
              Artigos técnicos, case studies e atualizações sobre a linguagem universal do futuro.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Featured post */}
              {featured && activeCategory === 'Todos' && (
                <ScrollReveal>
                  <article className="group mb-12 rounded-2xl bg-white border border-neutral/30 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="h-56 bg-gradient-to-br from-primary/15 to-secondary/20 flex items-center justify-center">
                      <span className="text-6xl">📖</span>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                          Destaque
                        </span>
                        <span className="px-3 py-0.5 rounded-full bg-neutral text-accent/60 text-xs font-medium">
                          {featured.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-display font-bold text-accent mb-3 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-accent/50 mb-4 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-accent/40">
                          <span className="flex items-center gap-1"><User size={12} /> {featured.author}</span>
                          <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                          <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                        </div>
                        <button className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                          Ler mais <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              )}

              {/* Post grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {rest.map((post, i) => (
                  <ScrollReveal key={post.id} delay={i * 80}>
                    <article className="group rounded-2xl bg-white border border-neutral/30 overflow-hidden hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="h-36 bg-gradient-to-br from-primary/8 to-secondary/12 flex items-center justify-center">
                        <Tag size={28} className="text-primary/30" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary/8 text-primary text-xs font-medium self-start mb-3">
                          {post.category}
                        </span>
                        <h3 className="font-display font-semibold text-accent mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-accent/45 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral/15">
                          <div className="flex items-center gap-3 text-xs text-accent/35">
                            <span className="flex items-center gap-1"><User size={11} /> {post.author}</span>
                            <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                          </div>
                          <button className="text-xs text-primary font-semibold flex items-center gap-1 cursor-pointer">
                            Ler <ArrowRight size={12} />
                          </button>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 space-y-8">
              {/* Categories */}
              <div className="p-6 rounded-2xl bg-white border border-neutral/30">
                <h3 className="font-display font-semibold text-accent mb-4">Categorias</h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                        activeCategory === cat.name
                          ? 'bg-primary/8 text-primary font-semibold'
                          : 'text-accent/60 hover:bg-neutral-light/50 hover:text-accent'
                      }`}
                    >
                      {cat.name}
                      <span className="text-xs bg-neutral-light/60 px-2 py-0.5 rounded-full">{cat.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent posts */}
              <div className="p-6 rounded-2xl bg-white border border-neutral/30">
                <h3 className="font-display font-semibold text-accent mb-4">Posts Recentes</h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <p className="text-sm font-medium text-accent group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </p>
                      <span className="text-xs text-accent/35 mt-1">{post.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/15">
                <Mail size={24} className="text-primary mb-3" />
                <h3 className="font-display font-semibold text-accent mb-2">Newsletter</h3>
                <p className="text-xs text-accent/50 mb-4">Receba atualizações semanais sobre o unifyX.</p>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral/30 text-sm mb-3 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 bg-white"
                />
                <Button size="sm" className="w-full">Assinar</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
