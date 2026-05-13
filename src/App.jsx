import { useState, useCallback, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import ScrollToTop from './Components/Common/ScrollToTop'
import SEOHead from './Components/Common/SEOHead'
import Loader from './Components/Common/Loader'
import FloatingButtons from './Components/Common/FloatingButtons'

const Home = lazy(() => import('./Pages/Home'))
const IitJee = lazy(() => import('./Pages/Iit-Jee'))
const Courses = lazy(() => import('./Pages/Courses.jsx'))
const Results = lazy(() => import('./Pages/Results'))
const Contact = lazy(() => import('./Pages/Contact'))

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoaderComplete = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <Router>
        <ScrollToTop />
        <SEOHead />
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iit-jee-neet" element={<IitJee />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <FloatingButtons />
      </Router>
    </>
  )
}

export default App
