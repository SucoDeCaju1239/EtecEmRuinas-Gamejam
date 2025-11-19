'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Play } from 'lucide-react'

function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.1, ...options })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isInView] as const
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  
  const [titleRef, titleInView] = useInView()
  const [featuresRef, featuresInView] = useInView()
  const [requirementsRef, requirementsInView] = useInView()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Animated background noise effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        
        {/* Top-left blood splatter */}
        <svg className="absolute top-0 left-0 w-96 h-96"
          style={{
            opacity: Math.min(scrollY / 400, 0.5),
            transform: `translateY(${Math.max(-scrollY * 0.3, -100)}px)`
          }}
          viewBox="0 0 200 200">
          <ellipse cx="60" cy="50" rx="8" ry="10" fill="rgba(220, 20, 60, 0.8)" />
          <ellipse cx="65" cy="35" rx="6" ry="8" fill="rgba(178, 34, 34, 0.6)" />
          <ellipse cx="50" cy="45" rx="5" ry="7" fill="rgba(220, 20, 60, 0.7)" />
          <path d="M 60 60 Q 55 80 58 100 Q 62 85 65 105" stroke="rgba(139, 0, 0, 0.5)" strokeWidth="2" fill="none" />
          <circle cx="75" cy="70" r="3" fill="rgba(220, 20, 60, 0.6)" />
          <circle cx="45" cy="75" r="4" fill="rgba(178, 34, 34, 0.7)" />
          <circle cx="55" cy="90" r="2" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="70" cy="85" r="2.5" fill="rgba(139, 0, 0, 0.6)" />
          <circle cx="40" cy="60" r="3" fill="rgba(178, 34, 34, 0.5)" />
        </svg>

        {/* Top-right blood splatter */}
        <svg className="absolute top-20 right-0 w-80 h-80"
          style={{
            opacity: Math.min(scrollY / 400, 0.5),
            transform: `translateY(${Math.max(-scrollY * 0.25, -80)}px) scaleX(-1)`
          }}
          viewBox="0 0 200 200">
          <ellipse cx="150" cy="60" rx="10" ry="12" fill="rgba(220, 20, 60, 0.8)" />
          <ellipse cx="140" cy="45" rx="6" ry="8" fill="rgba(178, 34, 34, 0.6)" />
          <ellipse cx="160" cy="50" rx="5" ry="7" fill="rgba(220, 20, 60, 0.7)" />
          <path d="M 150 70 Q 140 90 145 110" stroke="rgba(139, 0, 0, 0.5)" strokeWidth="2" fill="none" />
          <circle cx="165" cy="80" r="3" fill="rgba(220, 20, 60, 0.6)" />
          <circle cx="135" cy="85" r="4" fill="rgba(178, 34, 34, 0.7)" />
          <circle cx="155" cy="100" r="2" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="130" cy="70" r="2.5" fill="rgba(139, 0, 0, 0.6)" />
          <circle cx="170" cy="65" r="3" fill="rgba(178, 34, 34, 0.5)" />
        </svg>

        {/* Middle blood splatter - left side */}
        <svg className="absolute top-1/2 -left-10 w-72 h-72"
          style={{
            opacity: Math.min(Math.max(scrollY - 300, 0) / 400, 0.5),
            transform: `translateY(${Math.min(scrollY * 0.2, 150)}px)`
          }}
          viewBox="0 0 200 200">
          <ellipse cx="180" cy="80" rx="12" ry="14" fill="rgba(220, 20, 60, 0.8)" />
          <ellipse cx="170" cy="65" rx="7" ry="9" fill="rgba(178, 34, 34, 0.6)" />
          <path d="M 180 95 L 175 130 L 185 125" stroke="rgba(139, 0, 0, 0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="195" cy="100" r="4" fill="rgba(220, 20, 60, 0.7)" />
          <circle cx="165" cy="110" r="3" fill="rgba(178, 34, 34, 0.6)" />
          <circle cx="175" cy="50" r="2.5" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="190" cy="70" r="2" fill="rgba(139, 0, 0, 0.6)" />
          <circle cx="160" cy="95" r="3" fill="rgba(178, 34, 34, 0.5)" />
        </svg>

        {/* New blood splatter - right side middle */}
        <svg className="absolute top-2/3 right-10 w-64 h-64"
          style={{
            opacity: Math.min(Math.max(scrollY - 400, 0) / 400, 0.5),
            transform: `translateY(${Math.min(scrollY * 0.15, 200)}px)`
          }}
          viewBox="0 0 200 200">
          <ellipse cx="40" cy="60" rx="9" ry="11" fill="rgba(220, 20, 60, 0.8)" />
          <ellipse cx="50" cy="50" rx="6" ry="7" fill="rgba(178, 34, 34, 0.6)" />
          <path d="M 40 75 Q 35 95 40 110" stroke="rgba(139, 0, 0, 0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="25" cy="70" r="3" fill="rgba(220, 20, 60, 0.7)" />
          <circle cx="55" cy="75" r="3" fill="rgba(178, 34, 34, 0.6)" />
          <circle cx="45" cy="40" r="2" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="30" cy="90" r="2.5" fill="rgba(139, 0, 0, 0.6)" />
          <circle cx="60" cy="65" r="2" fill="rgba(178, 34, 34, 0.5)" />
        </svg>

        {/* Bottom blood pool */}
        <svg className="absolute bottom-20 left-1/4 w-96 h-48"
          style={{
            opacity: Math.min(Math.max(scrollY - 600, 0) / 400, 0.6),
            transform: `translateY(${Math.min(scrollY * 0.15, 200)}px)`
          }}
          viewBox="0 0 300 150">
          <ellipse cx="80" cy="120" rx="20" ry="15" fill="rgba(139, 0, 0, 0.4)" />
          <ellipse cx="150" cy="110" rx="25" ry="18" fill="rgba(220, 20, 60, 0.5)" />
          <ellipse cx="220" cy="125" rx="18" ry="14" fill="rgba(178, 34, 34, 0.4)" />
          <circle cx="50" cy="100" r="5" fill="rgba(220, 20, 60, 0.6)" />
          <circle cx="120" cy="85" r="4" fill="rgba(178, 34, 34, 0.5)" />
          <circle cx="250" cy="105" r="6" fill="rgba(139, 0, 0, 0.5)" />
          <circle cx="90" cy="95" r="3" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="180" cy="100" r="2.5" fill="rgba(178, 34, 34, 0.6)" />
          <circle cx="60" cy="130" r="2" fill="rgba(139, 0, 0, 0.4)" />
          <path d="M 80 135 Q 85 150 80 160" stroke="rgba(139, 0, 0, 0.3)" strokeWidth="2" fill="none" />
          <path d="M 150 128 Q 155 145 150 155" stroke="rgba(220, 20, 60, 0.3)" strokeWidth="2" fill="none" />
          <path d="M 220 135 Q 215 150 220 160" stroke="rgba(178, 34, 34, 0.3)" strokeWidth="2" fill="none" />
        </svg>

        {/* New bottom-right blood splatter */}
        <svg className="absolute bottom-40 right-20 w-80 h-80"
          style={{
            opacity: Math.min(Math.max(scrollY - 700, 0) / 400, 0.5),
            transform: `translateY(${Math.min(scrollY * 0.1, 150)}px)`
          }}
          viewBox="0 0 200 200">
          <ellipse cx="100" cy="80" rx="11" ry="13" fill="rgba(220, 20, 60, 0.8)" />
          <ellipse cx="110" cy="65" rx="6" ry="8" fill="rgba(178, 34, 34, 0.6)" />
          <ellipse cx="85" cy="70" rx="5" ry="7" fill="rgba(220, 20, 60, 0.7)" />
          <path d="M 100 95 Q 95 115 100 135" stroke="rgba(139, 0, 0, 0.5)" strokeWidth="2" fill="none" strokeLinecap="round" />
          <circle cx="120" cy="100" r="3" fill="rgba(220, 20, 60, 0.6)" />
          <circle cx="80" cy="105" r="4" fill="rgba(178, 34, 34, 0.7)" />
          <circle cx="105" cy="50" r="2.5" fill="rgba(220, 20, 60, 0.5)" />
          <circle cx="75" cy="85" r="2" fill="rgba(139, 0, 0, 0.6)" />
          <circle cx="125" cy="75" r="3" fill="rgba(178, 34, 34, 0.5)" />
        </svg>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center ">
              <span className="text-accent-foreground font-bold">⚠</span>
            </div>
            <h1 className="text-xl font-extrabold tracking-widest text-accent font-magical" style={{ transform: 'scaleX(-1)' }}>ETEC EM RUÍNAS</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <p className="text-accent font-black text-lg tracking-widest animate-pulse drop-shadow-lg" style={{ textShadow: '0 0 8px rgba(95, 17, 17, 0.8)' }}>
              #GAMEJAM2025
            </p>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div ref={titleRef} className={`text-center relative z-10 transition-all duration-1000 ${
          titleInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-12'
        }`}>
          {/* Main Title */}
          <div className="mb-8 space-y-4">
            <p className="text-accent text-sm md:text-base font-mono tracking-widest uppercase animate-broken-lamp">
              ⚠️ ACESSO RESTRITO ⚠️
            </p>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight glow-red">
              ETEC EM
              <br />
              <span className="text-accent">RUÍNAS</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              Explore os corredores sombrios de uma escola abandonada. Descubra seus mistérios ocultos enquanto luta pela sobrevivência em um ambiente repleto de terror.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 max-w-md mx-auto">
            <button
              onClick={() => setIsHovering(!isHovering)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="group relative px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              <span>ENTRAR NO JOGO</span>
              <div className={`absolute inset-0 bg-accent/20 rounded-lg blur-lg -z-10 transition-all ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
            </button>

            <button className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg transition-all duration-300 hover:bg-accent/10 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              <span>BAIXAR</span>
            </button>
          </div>

          {/* Game Info */}
          <div className="mt-16 text-sm text-muted-foreground">
            <p>🎮 Desenvolvido na gamejam 2025!</p>
            <p className="mt-2"> Totalmente gratuito | Pode ser baixado/jogado pelo navegador</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 glow-amber">
            CARACTERÍSTICAS
          </h3>

          <div ref={featuresRef} className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            featuresInView
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}>
            {/* Feature Card 1 */}
            {[
              {
                icon: '🏚️',
                title: 'Ambiente Imersivo',
                desc: 'Explore um labirinto que se assemelha às ruínas de uma antiga escola técnica.'
              },
              {
                icon: '👻',
                title: 'Monstros Ameaçadores',
                desc: 'Desbrave corredores escuros, salas acabadas e banheiros mofados ao longo da sua jornada.'
              },
              {
                icon: '🙌',
                title: 'Seja agraciado',
                desc: 'Receba a graça da divindade benevolente, a rainha da lindeza!'
              },
              {
                icon: '🎵',
                title: 'Áudio Envolvente',
                desc: 'Trilha sonora impactante, que conecta você à este universo paralelo ameaçador'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`group border border-border/30 rounded-lg p-8 hover:border-accent/50 transition-all duration-300 hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/10 ${
                  featuresInView
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: featuresInView ? `${index * 100}ms` : '0ms'
                }}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-accent">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 px-4 border-t border-border/20 relative">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 glow-amber">
            Sinopse
          </h3>
          <em className="italic">"Você se encontra na sua antiga escola, a Etec de Peruíbe... porém, tem algo diferente... salas vazias, corredores escuros, silêncio absoluto, apenas um rastro de fé e devoção à Deusa da lindeza pode lhe ajudar nessa jornada de monstros com um pouco mais de um salário mínimo... "</em>
        </div>
      </section>

      {/* Integrantes Section */}
      <section className="py-20 px-4 border-t border-border/20 relative">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 glow-amber">
            Integrantes
          </h3>
          <ul className="space-y-4 text-center">
            {[
              {
                name: 'Maykon Sullyvan Jesus Gouveia Alves',
                role: '3º MDS',
                
              },
              {
                name: 'Matheus Ribeiro  ',
                role: '3º MDS',
                
              },
              {
                name: 'Davi Borges',
                role: '3º JODI',
                
              },
              {
                name: 'Yasmin Machado ',
                role: '3º JODI',
                
              },
              {
                name: 'Lucas Vital Marinho',
                role: '2º JODI',
                
              },
              {
                name: 'Luca Jin Lee Barros',
                role: '2º JODI',
                
              },
              {
                name: 'Lucas Pessôa Carneiro Rodrigues dos Santos',
                role: '2º JODI',
              },
              
              
              {
                name: 'Pablo Ruan Silva',
                role: '1º JODI',
                
              },
            ].map((member, index) => (
              <li key={index} className="text-lg">
                <strong>{member.name}</strong> - {member.role}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12 px-4 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">ETEC EM RUÍNAS © 2025. Todos os direitos reservados.</p>
          
        </div>
      </footer>
    </main>
  )
}
