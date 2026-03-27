import { useState } from 'react'
import { Search, ChevronRight, ExternalLink, BookOpen, Menu, X } from 'lucide-react'
import CodeBlock from '../components/CodeBlock'
import ScrollReveal from '../components/ScrollReveal'

const sidebarSections = [
  { id: 'intro', label: 'Introdução' },
  { id: 'install', label: 'Guia de Instalação' },
  { id: 'syntax', label: 'Sintaxe Fundamental' },
  { id: 'types', label: 'Tipos de Dados' },
  { id: 'functions', label: 'Funções' },
  { id: 'jsx', label: 'JSX e Componentes' },
  { id: 'web', label: 'Compilação Web' },
  { id: 'mobile', label: 'Compilação Mobile' },
  { id: 'desktop', label: 'Compilação Desktop' },
  { id: 'os', label: 'unifyOS' },
  { id: 'api', label: 'API Reference' },
  { id: 'examples', label: 'Exemplos' },
]

const introCode = `// Instalação via unifyx CLI
$ ux init my-app
$ cd my-app
$ ux dev

// ✅ Servidor rodando em http://localhost:3000`

const syntaxCode = `// Variáveis e tipos
let name: string = "unifyX";
let version: i32 = 1;
let active: bool = true;

// Funções tipadas
fn greet(name: string) -> string {
  return "Olá, " + name + "!";
}

// Arrays e iteração
let langs = ["Rust", "Go", "Python"];
for lang in langs {
  print(greet(lang));
}`

const jsxCode = `import { signal, computed, render } from 'unifyx';

function Counter() {
  const count = signal(0);
  const doubled = computed(() => count() * 2);
  
  return (
    <div class="counter">
      <h2>Contador: {count()}</h2>
      <p>Dobro: {doubled()}</p>
      <button onClick={() => count.set(c => c + 1)}>
        +1
      </button>
    </div>
  );
}

render(<Counter />, document.getElementById('app'));`

const interopCode = `// Chamando código Rust diretamente
extern "rust" fn fibonacci(n: i32) -> i32;

// Usando bibliotecas Python
extern "python" fn analyze_data(csv: string) -> DataFrame;

// Interoperabilidade com Go
extern "go" fn serve_http(port: i32) -> Server;

fn main() {
  let fib = fibonacci(40);        // ~2ms
  let data = analyze_data("data.csv");
  let server = serve_http(8080);
}`

interface DocSection {
  id: string
  title: string
  content: React.ReactNode
}

const sections: DocSection[] = [
  {
    id: 'intro',
    title: 'Introdução',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          <strong className="text-accent">unifyX</strong> é uma linguagem de programação universal que combina a familiaridade do JSX com a performance de linguagens de sistema. Escreva uma vez, compile para qualquer plataforma.
        </p>
        <div className="p-5 rounded-xl bg-primary/5 border border-primary/15">
          <p className="text-sm text-accent/70 italic">
            "I HAVE A DREAM THAT ONE DAY THIS PROGRAM WILL CONTROL ITS OWN DESTINY"
          </p>
        </div>
        <h3 className="text-xl font-display font-bold text-accent">Por que unifyX?</h3>
        <ul className="space-y-2 text-sm text-accent/70">
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> Performance 10-100x superior ao React</li>
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> Suporte para Web, Mobile, Desktop e OS</li>
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> Interoperabilidade nativa com Rust, Go, Python e C++</li>
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> Segurança de memória sem Garbage Collector</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'install',
    title: 'Guia de Instalação',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          Comece instalando o CLI do unifyX globalmente. Suporte para Windows, macOS e Linux.
        </p>
        <CodeBlock code={introCode} language="bash" title="terminal" />
        <h3 className="text-xl font-display font-bold text-accent mt-6">Requisitos</h3>
        <ul className="space-y-2 text-sm text-accent/70">
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> Node.js 18+ (para ferramentas de desenvolvimento)</li>
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> 4GB RAM disponível</li>
          <li className="flex items-start gap-2"><ChevronRight size={14} className="text-primary mt-1 shrink-0" /> 500MB espaço em disco</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'syntax',
    title: 'Sintaxe Fundamental',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          A sintaxe do unifyX é inspirada em TypeScript e Rust, combinando tipagem forte com expressividade.
        </p>
        <CodeBlock code={syntaxCode} language="typescript" title="syntax.ux" />
      </div>
    ),
  },
  {
    id: 'jsx',
    title: 'JSX e Componentes',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          unifyX usa JSX nativo com reatividade granular. Sem Virtual DOM — cada atualização é cirurgicamente precisa.
        </p>
        <CodeBlock code={jsxCode} language="jsx" title="counter.ux" />
        <h3 className="text-xl font-display font-bold text-accent mt-6">Signals e Reatividade</h3>
        <p className="text-sm text-accent/70 leading-relaxed">
          O sistema de <code className="px-1.5 py-0.5 rounded bg-primary/8 text-primary font-mono text-xs">signal</code> do unifyX rastreia automaticamente dependências e atualiza apenas os nós do DOM que mudaram — sem diffing, sem reconciliação.
        </p>
      </div>
    ),
  },
  {
    id: 'web',
    title: 'Compilação Web',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          Compile seu código unifyX para WebAssembly otimizado com um único comando. O bundle gerado é extremamente leve.
        </p>
        <CodeBlock
          code={`$ ux build --target web\n\n✅ Build completo em 1.2s\n📦 Bundle: 8.3KB (gzipped)\n🚀 Pronto para deploy`}
          language="bash"
          title="terminal"
        />
      </div>
    ),
  },
  {
    id: 'api',
    title: 'API Reference',
    content: (
      <div className="space-y-6">
        <p className="text-accent/70 leading-relaxed">
          Referência completa da API do unifyX, incluindo signals, computed values, effects e componentes.
        </p>
        <CodeBlock code={interopCode} language="typescript" title="interop.ux" />
      </div>
    ),
  },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('intro')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentSection = sections.find((s) => s.id === activeSection)
  const filteredSections = sidebarSections.filter((s) =>
    s.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen pt-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile sidebar toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-xl flex items-center justify-center cursor-pointer"
            aria-label="Toggle docs sidebar"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-20 left-0 z-40 h-[calc(100vh-5rem)] w-72 shrink-0
              bg-white lg:bg-transparent border-r lg:border-r-0 border-neutral/20
              overflow-y-auto transition-transform duration-300 lg:translate-x-0
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}
          >
            <div className="p-4 lg:p-0">
              {/* Search */}
              <div className="relative mb-6">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-accent/30" />
                <input
                  type="text"
                  placeholder="Buscar documentação..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral/30 bg-neutral-light/30 text-sm focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              {/* Nav links */}
              <nav className="space-y-0.5">
                {filteredSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setSidebarOpen(false); }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeSection === s.id
                        ? 'bg-primary/8 text-primary border-l-3 border-primary'
                        : 'text-accent/60 hover:text-accent hover:bg-neutral-light/50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-accent/40 mb-8">
              <BookOpen size={14} />
              <span>Docs</span>
              <ChevronRight size={14} />
              <span className="text-accent font-medium">{sidebarSections.find(s => s.id === activeSection)?.label}</span>
            </div>

            {currentSection ? (
              <ScrollReveal key={currentSection.id}>
                <article className="prose max-w-none">
                  <h1 className="text-3xl lg:text-4xl font-display font-bold text-accent mb-8">
                    {currentSection.title}
                  </h1>
                  {currentSection.content}
                </article>
              </ScrollReveal>
            ) : (
              <div className="text-center py-20">
                <BookOpen size={48} className="mx-auto text-accent/20 mb-4" />
                <h2 className="text-xl font-display font-semibold text-accent/60 mb-2">Em breve</h2>
                <p className="text-sm text-accent/40">Esta seção está sendo escrita. Volte em breve!</p>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-16 pt-8 border-t border-neutral/20">
              {(() => {
                const idx = sidebarSections.findIndex(s => s.id === activeSection)
                const prev = idx > 0 ? sidebarSections[idx - 1] : null
                const next = idx < sidebarSections.length - 1 ? sidebarSections[idx + 1] : null
                return (
                  <>
                    {prev ? (
                      <button onClick={() => setActiveSection(prev.id)} className="text-sm text-accent/50 hover:text-primary transition-colors cursor-pointer">
                        ← {prev.label}
                      </button>
                    ) : <div />}
                    {next ? (
                      <button onClick={() => setActiveSection(next.id)} className="text-sm text-accent/50 hover:text-primary transition-colors cursor-pointer">
                        {next.label} →
                      </button>
                    ) : <div />}
                  </>
                )
              })()}
            </div>
          </main>

          {/* Right sidebar — TOC (desktop only) */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24">
              <h4 className="font-display font-semibold text-xs text-accent/40 uppercase tracking-wider mb-4">
                Nesta página
              </h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-accent/50 hover:text-primary transition-colors">Visão geral</a>
                <a href="#" className="block text-accent/50 hover:text-primary transition-colors">Exemplos</a>
                <a href="#" className="block text-accent/50 hover:text-primary transition-colors">Referência</a>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral/20">
                <a
                  href="https://github.com/unifyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-accent/40 hover:text-primary transition-colors"
                >
                  <ExternalLink size={12} />
                  Editar no GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
