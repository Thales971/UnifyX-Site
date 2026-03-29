import {
  Zap, Globe, Code2, Layers, Shield, Gauge,
  ArrowRight, GitFork, Sparkles
} from 'lucide-react'
import Button from '../components/Button'
import FeatureGrid from '../components/FeatureGrid'
import ComparisonTable from '../components/ComparisonTable'
import Roadmap from '../components/Roadmap'
import CodeBlock from '../components/CodeBlock'
import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: <Gauge size={24} />,
    title: 'Performance Extrema',
    description: '10-100x mais rápido que React. Compilação AOT para código nativo otimizado.',
  },
  {
    icon: <Globe size={24} />,
    title: 'Universalidade',
    description: 'Web, mobile, desktop, bare metal. Uma linguagem, todas as plataformas.',
  },
  {
    icon: <Code2 size={24} />,
    title: 'JSX Familiar',
    description: 'Sintaxe que você já conhece, com o poder de uma linguagem de sistema.',
  },
  {
    icon: <Layers size={24} />,
    title: 'Interoperabilidade',
    description: 'Chame código Rust, Go, Python e C++ nativamente, sem bridges.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Segurança de Memória',
    description: 'Garantida em tempo de compilação, sem Garbage Collector.',
  },
  {
    icon: <Zap size={24} />,
    title: 'Sem Virtual DOM',
    description: 'Reatividade granular. Atualizações diretas no DOM real.',
  },
]

const comparisonRows = [
  { aspect: 'Performance', react: 'Virtual DOM', unifyx: 'Reatividade granular (Fine-grained)' },
  { aspect: 'Plataformas', react: 'Web, Mobile (RN)', unifyx: 'Web, Mobile, Desktop, OS' },
  { aspect: 'Bundle Size', react: '~40KB', unifyx: '~10KB' },
  { aspect: 'Velocidade', react: '~50ms/atualização', unifyx: '~5ms/atualização' },
  { aspect: 'Linguagem', react: 'JavaScript', unifyx: 'Compilação nativa' },
  { aspect: 'Memória', react: 'Garbage Collector', unifyx: 'Gerenciamento estático' },
]

const roadmapPhases = [
  {
    number: 1,
    title: 'Compilador Web',
    timeframe: 'Meses 1–6',
    status: 'progress' as const,
    items: [
      'Parser e AST para sintaxe unifyX',
      'Compilação JSX → WASM',
      'Sistema de reatividade granular',
      'Integração com bundlers existentes',
    ],
  },
  {
    number: 2,
    title: 'Ecossistema',
    timeframe: 'Meses 7–12',
    status: 'planned' as const,
    items: [
      'Package manager próprio',
      'Biblioteca de componentes padrão',
      'DevTools e debugger',
      'Documentação interativa',
    ],
  },
  {
    number: 3,
    title: 'unifyX Native',
    timeframe: 'Meses 13–24',
    status: 'planned' as const,
    items: [
      'Compilação para iOS e Android',
      'Runtime desktop (Windows, macOS, Linux)',
      'Interoperabilidade com SDKs nativos',
      'Hot reload multiplataforma',
    ],
  },
  {
    number: 4,
    title: 'unifyOS',
    timeframe: 'Meses 25+',
    status: 'vision' as const,
    items: [
      'Sistema operacional baseado em unifyX',
      'Kernel modular e seguro',
      'Mascote Cipher (Leopardo-Salsicha) no core',
      'Ecossistema de apps unifyX e Interface nativa',
    ],
  },
]

const heroCode = `// app.ux — seu primeiro componente unifyX
import { render, signal } from 'unifyx';

function App() {
  const count = signal(0);
  
  return (
    <div class="app">
      <h1>Olá, unifyX! 🚀</h1>
      <p>Contagem: {count()}</p>
      <button onClick={() => count.set(c => c + 1)}>
        Incrementar
      </button>
    </div>
  );
}

render(<App />, document.body);`

export default function Home() {
  return (
    <div>
      {/* ====== HERO ====== */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 mb-6">
                <Sparkles size={14} className="text-primary" />
                <span className="text-xs font-semibold text-primary">I HAVE A DREAM</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-accent leading-tight mb-6">
                A Linguagem{' '}
                <span className="text-gradient">Universal</span>{' '}
                do Futuro
              </h1>

              <p className="text-lg text-accent/60 leading-relaxed max-w-xl mb-8">
                Escreva uma vez em JSX. Compile para qualquer lugar com performance nativa.
                Da web ao sistema operacional — <strong className="text-accent">controle seu próprio destino</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/docs">
                  <Button size="lg" icon={<ArrowRight size={18} />}>
                    Explorar Documentação
                  </Button>
                </Link>
                <a href="https://github.com/unifyx" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" icon={<GitFork size={18} />}>
                    Ver no GitHub
                  </Button>
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-neutral/30">
                {[
                  { value: '10x', label: 'Mais rápido' },
                  { value: '~10KB', label: 'Bundle size' },
                  { value: '5ms', label: 'Atualização' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-display font-bold text-primary">{s.value}</div>
                    <div className="text-xs text-accent/40 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — Code preview */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-2xl" />
                <div className="relative">
                  <CodeBlock code={heroCode} language="jsx" title="app.ux" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FEATURES ====== */}
      <section id="features" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                Tudo que você precisa, nada que não precisa
              </h2>
              <p className="text-accent/50">
                unifyX combina a familiaridade do JSX com performance de linguagem de sistema.
              </p>
            </div>
          </ScrollReveal>
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* ====== COMPARISON ====== */}
      <section id="comparison" className="py-24 lg:py-32 bg-neutral-light/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comparação</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                React vs unifyX
              </h2>
              <p className="text-accent/50">
                Veja como unifyX supera frameworks tradicionais em cada aspecto.
              </p>
            </div>
          </ScrollReveal>
          <ComparisonTable rows={comparisonRows} />
        </div>
      </section>

      {/* ====== ROADMAP ====== */}
      <section id="roadmap" className="py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Roadmap</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-accent mt-3 mb-4">
                A Jornada do unifyX
              </h2>
              <p className="text-accent/50">
                Do compilador web ao sistema operacional — cada fase nos aproxima do futuro.
              </p>
            </div>
          </ScrollReveal>
          <Roadmap phases={roadmapPhases} />
        </div>
      </section>

      {/* ====== FINAL CTA ====== */}
      <section className="py-24 lg:py-32 bg-gradient-cta relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Pronto para o Futuro?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
              Junte-se à revolução. Controle seu próprio destino com unifyX.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/docs">
                <Button size="lg" icon={<ArrowRight size={18} />}>
                  Começar Agora
                </Button>
              </Link>
              <Link to="/docs">
                <Button variant="outline" size="lg" className="!border-white/30 !text-white hover:!bg-white/10">
                  Documentação Completa
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
