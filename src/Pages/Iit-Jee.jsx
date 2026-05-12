import Hero from '../Components/iit-jee/Hero'
import WhyGravity from '../Components/iit-jee/WhyGravity'
import Methodology from '../Components/iit-jee/Methodology'
import RankCards from '../Components/iit-jee/RankCards'
import Faculty from '../Components/iit-jee/Faculty'
import Testimonial from '../Components/iit-jee/Testimonial'
import FinalCTA from '../Components/iit-jee/FinalCTA'

export default function IitJee() {
  return (
    <main className="pt-20">
      <Hero />
      <WhyGravity />
      <Methodology />
      <RankCards />
      <Faculty />
      <Testimonial />
      <FinalCTA />
    </main>
  )
}
