import { useState, useCallback } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import ScrollToTop from './Components/Common/ScrollToTop'
import Loader from './Components/Common/Loader'
import Home from './Pages/Home'
import IitJee from './Pages/Iit-Jee'
import Courses from './Pages/Courses.jsx'
import Results from './Pages/Results'
import Contact from './Pages/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const handleLoaderComplete = useCallback(() => setLoading(false), [])

  return (
    <>
      {loading && <Loader onComplete={handleLoaderComplete} />}
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iit-jee-neet" element={<IitJee />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
