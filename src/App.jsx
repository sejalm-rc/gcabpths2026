import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tracks from './components/Tracks'
import Submission from './components/Submission'
import Registration from './components/Registration'
import Dates from './components/Dates'
import Committee from './components/Committee'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Tracks />
        <Submission />
        <Registration />
        <Dates />
        <Committee />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
