import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="container-max mt-12">
        <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
        <p className="mt-4 text-blue-200/90 max-w-2xl">I’d love to hear from you. Here are the best ways to reach me.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-300" size={20} />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-blue-200/90 text-sm">you@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Phone className="text-blue-300" size={20} />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-blue-200/90 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <MapPin className="text-blue-300" size={20} />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-blue-200/90 text-sm">City, Country</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <p className="text-white font-medium">Social</p>
            <div className="mt-4 flex flex-col gap-3">
              <a className="inline-flex items-center gap-2 text-blue-200 hover:text-white" href="#">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a className="inline-flex items-center gap-2 text-blue-200 hover:text-white" href="#">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
