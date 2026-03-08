import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Toaster from './components/ui/Toaster'
import FloatingContact from './components/ui/FloatingContact'
import ScrollProgress from './components/ui/ScrollProgress'
import WelcomeLoader from './components/ui/WelcomeLoader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import './App.css'
import { useState } from 'react'

const Hero = lazy(() => import('./components/sections/Hero'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Experience = lazy(() => import('./components/sections/Experience'))
const CodeSnippets = lazy(() => import('./components/sections/CodeSnippets'))
const Articles = lazy(() => import('./components/sections/Articles'))
const GitHubStats = lazy(() => import('./components/sections/GitHubStats'))
const Contact = lazy(() => import('./components/sections/Contact'))


function HomePage() {
  return (
    <Suspense fallback={null}>
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <WelcomeLoader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <ScrollProgress />
          <FloatingContact />
          <Toaster />
        </motion.div>
      )}
    </>
  )
}

export default App
