import { Link } from 'react-router-dom'
import { GitBranch as GithubIcon, Send as TwitterIcon, MessageCircle, Mail } from 'lucide-react'

const footerLinks = {
  Produto: [
    { label: 'Downloads', to: '/downloads' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Showcase', to: '/showcase' },
  ],
  Recursos: [
    { label: 'Documentação', to: '/docs' },
    { label: 'Blog', to: '/blog' },
    { label: 'Sobre', to: '/about' },
  ],
  Comunidade: [
    { label: 'GitHub', to: '/community' },
    { label: 'Discord', to: '/community' },
    { label: 'Fórum', to: '/community' },
  ],
}

const socialLinks = [
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">uX</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                unify<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              A linguagem universal do futuro. Escreva uma vez em JSX, compile para qualquer lugar com performance nativa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-primary/30 hover:text-primary transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 unifyX. Controle seu próprio destino.
          </p>
          <p className="text-xs text-white/40">
            Feito com ❤️ pela comunidade unifyX
          </p>
        </div>
      </div>
    </footer>
  )
}
