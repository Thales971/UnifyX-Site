import ScrollReveal from '../components/ScrollReveal'

export default function About() {
  return (
    <div className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-neutral-dark mb-12 text-center">
            A História do <span className="text-gradient">unifyX</span>
          </h1>
          
          <div className="prose prose-lg mx-auto text-neutral-dark/80">
            <p className="lead text-xl mb-8">
              "I HAVE A DREAM THAT ONE DAY THIS PROGRAM WILL CONTROL ITS OWN DESTINY."
            </p>
            
            <p className="mb-6">
              O projeto unifyX nasceu da frustração e da ambição. Frustração com a fragmentação do ecossistema de software: por que temos que aprender React para web, Swift para iOS, Kotlin para Android e Rust/C++ para sistemas pesados?
            </p>

            <h2 className="text-2xl font-bold text-neutral-dark mt-10 mb-4">A Lenda de CIPHER e NEXUS</h2>
            <p className="mb-6">
              Em nossa lore, <strong>NEXUS</strong> é a armadura holográfica, a estrutura rígida e absurdamente poderosa que compila código mais rápido do que a luz, base conceitual do compilador unifyX. E <strong>CIPHER</strong>, o leopardo-salsicha cybernético, representa nossa versatilidade — rápido, comprido (alcance infinito) e eternamente legal.
            </p>
            
            <h2 className="text-2xl font-bold text-neutral-dark mt-10 mb-4">A Missão</h2>
            <p className="mb-6">
              Nossa missão é obliterar barreiras técnicas. Escreva JSX, compile para bare-metal. O desenvolvedor do futuro não pensa no "meio" e sim no "resultado". Com a performance extrema que trazemos, você pode criar desde o próximo framework web corporativo até a próxima engine de renderização em tempo real — tudo com a sintaxe universal de componentes.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-primary mb-2">Junte-se a Nós</h3>
              <p>O futuro não será escrito em JavaScript, será compilado por unifyX.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
