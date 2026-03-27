import { useState, useEffect, useRef } from 'react'
import { Copy, Check } from 'lucide-react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-rust'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-zig'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  title?: string
}

export default function CodeBlock({
  code,
  language = 'jsx',
  showLineNumbers = true,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [code, language])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  return (
    <div className="rounded-2xl overflow-hidden border border-neutral/30 bg-[#1d1f21] shadow-lg">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#282a2e] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {title && (
            <span className="ml-2 text-xs text-white/40 font-mono">{title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/30 font-mono uppercase">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
            aria-label="Copiar código"
          >
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <div className="flex min-w-full">
          {showLineNumbers && (
            <div className="flex flex-col items-end py-4 px-3 bg-[#1d1f21] border-r border-white/5 select-none shrink-0">
              {lines.map((_, i) => (
                <span key={i} className="text-xs leading-6 text-white/15 font-mono">
                  {i + 1}
                </span>
              ))}
            </div>
          )}
          <pre className="flex-1 py-4 px-4 m-0 bg-transparent overflow-x-auto">
            <code ref={codeRef} className={`language-${language} !bg-transparent text-sm leading-6`}>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
