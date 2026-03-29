import { Download, Terminal, Monitor, Apple } from 'lucide-react'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

export default function Downloads() {
  return (
    <div className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-dark mb-6">
              Instale o <span className="text-gradient">unifyX</span>
            </h1>
            <p className="text-lg text-neutral-dark/60 leading-relaxed">
              Disponível para Windows, macOS e Linux. Entre na era da performance nativa hoje mesmo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Windows', icon: <Monitor size={32} />, cmd: 'winget install unifyx' },
            { name: 'macOS', icon: <Apple size={32} />, cmd: 'brew install unifyx' },
            { name: 'Linux', icon: <Terminal size={32} />, cmd: 'curl -sS https://get.unifyx.dev | sh' }
          ].map((os) => (
            <ScrollReveal key={os.name}>
              <div className="p-8 rounded-2xl bg-surface border border-neutral/20 shadow-lg hover:shadow-primary/10 transition-shadow">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {os.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-dark mb-2">{os.name}</h3>
                <p className="text-neutral-dark/60 mb-6 font-mono text-sm">{os.cmd}</p>
                <Button className="w-full" icon={<Download size={18} />}>Baixar para {os.name}</Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
