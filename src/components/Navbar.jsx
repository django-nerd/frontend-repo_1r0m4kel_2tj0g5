import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? 'bg-blue-500/20 text-white' : 'text-blue-200 hover:text-white hover:bg-white/5'
    }`

  return (
    <header className="sticky top-0 z-50 nav-glass">
      <div className="container-max flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
          <span className="text-white font-semibold">My Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer px-3 py-2 rounded-lg text-sm font-medium text-blue-200 hover:text-white hover:bg-white/5">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 card p-2 flex flex-col gap-1">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
