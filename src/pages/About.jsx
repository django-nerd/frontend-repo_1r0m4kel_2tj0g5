import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="container-max mt-12">
        <h1 className="text-3xl md:text-5xl font-bold">About Me</h1>
        <p className="mt-4 text-blue-200/90 max-w-2xl">I'm a passionate developer focused on building performant and joyful digital products. I love working across the stack and bringing ideas to life with clean code and thoughtful design.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-white font-semibold">Skills</h3>
            <ul className="mt-3 list-disc list-inside text-blue-200/90 text-sm space-y-1">
              <li>JavaScript, Python, Django, React</li>
              <li>APIs, Databases, Cloud</li>
              <li>Responsive design, Accessibility</li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-white font-semibold">Interests</h3>
            <p className="mt-3 text-blue-200/90 text-sm">I enjoy animation, 3D on the web, and crafting delightful micro-interactions. Outside of tech: music, hiking, and coffee.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
