import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import Button from '../components/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <span className="text-[10rem] lg:text-[14rem] font-display font-extrabold text-primary/8 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center animate-pulse-glow">
              <span className="text-4xl">🔍</span>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-display font-bold text-accent mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-accent/50 mb-8 leading-relaxed">
          Parece que esta página decidiu controlar seu próprio destino e foi para outro lugar. 
          Vamos te levar de volta.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button icon={<Home size={18} />}>
              Voltar ao Início
            </Button>
          </Link>
          <Link to="/docs">
            <Button variant="outline" icon={<ArrowLeft size={18} />}>
              Documentação
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
