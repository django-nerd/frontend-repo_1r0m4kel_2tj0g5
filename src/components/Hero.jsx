import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/60 to-slate-900/90 pointer-events-none" />

      <div className="relative container-max py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="hero-title text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Your Name</h1>
          <p className="hero-subtitle mt-4 text-blue-200/90 text-lg max-w-prose">I build modern, fast, and delightful web experiences. This portfolio showcases my work, skills, and ways to connect with me.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/contact" className="px-4 py-3 rounded-lg border border-white/10 text-blue-200 hover:text-white hover:bg-white/5 transition">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
