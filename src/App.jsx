import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Toaster from './components/ui/Toaster'
import FloatingContact from './components/ui/FloatingContact'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'

const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const CodeSnippets = lazy(() => import('./components/sections/CodeSnippets'))
const Articles = lazy(() => import('./components/sections/Articles'))
const GitHubStats = lazy(() => import('./components/sections/GitHubStats'))
const Contact = lazy(() => import('./components/sections/Contact'))

const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-1)', fontSize: '1rem' }}
    >
      Loading...
    </motion.div>
  </div>
)

function HomePage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CodeSnippets />
      <Articles />
      <GitHubStats />
      <Contact />
    </Suspense>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingContact />
      <Toaster />
    </>
  )
}

export default App
