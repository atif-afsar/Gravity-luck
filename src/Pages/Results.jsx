import Hero from '../Components/Results/Hero'
import TopRankers from '../Components/Results/TopRankers'
import YearWiseResults from '../Components/Results/YearWiseResults'
import Testimonials from '../Components/Results/Testimonials'
import ResultsTimeline from '../Components/Results/ResultsTimeline'
import ResultsCTA from '../Components/Results/ResultsCTA'

export default function Results() {
  return (
    <main className="pt-20">
      <Hero />
      <TopRankers />
      <YearWiseResults />
      <Testimonials />
      <ResultsTimeline />
      <ResultsCTA />
    </main>
  )
}
