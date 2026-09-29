import { Behind } from './components/Behind'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Industries } from './components/Industries'
import { Process } from './components/Process'
import { Services } from './components/Services'
import { Why } from './components/Why'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Why />
        <Behind />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
