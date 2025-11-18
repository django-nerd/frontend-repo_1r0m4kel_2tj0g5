import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    name: 'Interactive 3D Landing',
    desc: 'A playful 3D hero powered by Spline and React for a modern tech brand.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Portfolio Redesign',
    desc: 'A minimal, fast, and accessible portfolio using Tailwind and Vite.',
    img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'API Dashboard',
    desc: 'Analytics dashboard with charts, filters, and dark mode.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'E-commerce UI',
    desc: 'Product browsing experience with smooth transitions and cart.',
    img: 'https://images.unsplash.com/photo-1515165562835-c4c6b631df52?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function Projects() {
  return (
    <div>
      <Navbar />
      <main className="container-max mt-12">
        <h1 className="text-3xl md:text-5xl font-bold">Projects</h1>
        <p className="mt-4 text-blue-200/90 max-w-2xl">A selection of recent work. These are static examples for this assignment.</p>

        <div className="mt-10 grid grid-projects gap-6" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
          {projects.map((p, i) => (
            <article key={i} className="card overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.name}</h3>
                <p className="text-blue-200/90 text-sm mt-2">{p.desc}</p>
                <button className="btn-primary mt-4">View details</button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
