import Hero from '../Components/Home/Hero'
import GravityEdge from '../Components/Home/GravityEdge'
import PremierCourses from '../Components/Home/PremierCourses'
import ToppersSection from '../Components/Home/ToppersSection'
import ResultsShowcase from '../Components/Home/ResultsShowcase'
import LocationSection from '../Components/Home/LocationSection'
import CTASection from '../Components/Home/CTASection'

export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <GravityEdge />
      <PremierCourses />
      <ToppersSection />
      <ResultsShowcase />
      <LocationSection />
      <CTASection />
    </main>
  )
}
