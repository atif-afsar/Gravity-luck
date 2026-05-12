import Hero from '../Components/Contact/Hero'
import ContactForm from '../Components/Contact/ContactForm'
import ContactInfo from '../Components/Contact/ContactInfo'
import MapSection from '../Components/Contact/MapSection'
import ContactCTA from '../Components/Contact/ContactCTA'

export default function Contact() {
  return (
    <main className="pt-20">
      <Hero />
      <ContactForm />
      <ContactInfo />
      <MapSection />
      <ContactCTA />
    </main>
  )
}
