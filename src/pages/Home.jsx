import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section className="container-max mt-16 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-white font-semibold text-lg">Frontend</h3>
            <p className="text-blue-200/80 mt-2 text-sm">React, Tailwind, and modern UI patterns to craft beautiful interfaces.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-semibold text-lg">Backend</h3>
            <p className="text-blue-200/80 mt-2 text-sm">Fast, secure APIs with Python and Node, designed for scale.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-semibold text-lg">Design</h3>
            <p className="text-blue-200/80 mt-2 text-sm">User-centered design with accessibility and performance in mind.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
