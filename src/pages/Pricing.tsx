import { Check, Star } from 'lucide-react'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

export default function Pricing() {
  return (
    <div className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-dark mb-6">
              Preços <span className="text-gradient">Simples e Transparentes</span>
            </h1>
            <p className="text-lg text-neutral-dark/60 leading-relaxed">
              unifyX é Open Source, mas oferecemos recursos premium para empresas que querem dominar o mercado.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <ScrollReveal>
            <div className="p-8 rounded-2xl bg-surface border border-neutral/20 shadow-lg">
              <h3 className="text-xl font-display font-bold text-neutral-dark mb-2">Comunidade</h3>
              <div className="text-4xl font-extrabold text-neutral-dark mb-6">Grátis</div>
              <ul className="space-y-4 mb-8 text-neutral-dark/70">
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> Compilador Completo</li>
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> Suporte Multiplataforma</li>
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> Acesso à Comunidade</li>
              </ul>
              <Button variant="outline" className="w-full">Começar Grátis</Button>
            </div>
          </ScrollReveal>

          {/* Pro */}
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-2xl bg-linear-to-br from-primary to-primary-dark shadow-xl text-white relative transform md:-translate-y-4 border border-primary-light">
              <div className="absolute top-0 right-0 p-4">
                <Star size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">Pro</h3>
              <div className="text-4xl font-extrabold mb-6">$9<span className="text-xl font-normal opacity-80">/mês</span></div>
              <ul className="space-y-4 mb-8 opacity-90">
                <li className="flex gap-2"><Check className="text-white mt-1" size={18} /> Tudo do plano Grátis</li>
                <li className="flex gap-2"><Check className="text-white mt-1" size={18} /> Componentes Premium</li>
                <li className="flex gap-2"><Check className="text-white mt-1" size={18} /> Telemetria de Performance</li>
                <li className="flex gap-2"><Check className="text-white mt-1" size={18} /> Suporte Prioritário</li>
              </ul>
              <Button className="w-full bg-white text-primary hover:bg-neutral-light">Assinar Pro</Button>
            </div>
          </ScrollReveal>

          {/* Enterprise */}
          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-2xl bg-surface border border-neutral/20 shadow-lg">
              <h3 className="text-xl font-display font-bold text-neutral-dark mb-2">Enterprise</h3>
              <div className="text-4xl font-extrabold text-neutral-dark mb-6">Custom</div>
              <ul className="space-y-4 mb-8 text-neutral-dark/70">
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> SLAS Dedicados</li>
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> unifyOS Custom Build</li>
                <li className="flex gap-2"><Check className="text-primary mt-1" size={18} /> Consultoria de Migração</li>
              </ul>
              <Button variant="outline" className="w-full">Falar com Vendas</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
