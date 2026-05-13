import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO_DATA = {
  '/': {
    title: 'Gravity Classes Lucknow | Best IIT-JEE & NEET Coaching Institute',
    description: 'Gravity Classes is Lucknow\'s #1 IIT-JEE & NEET coaching institute. 771 out of 814 students cracked JEE Main 2026 — best result in India. Admissions open for 2026-27. Call +91 84000 02983.',
  },
  '/iit-jee-neet': {
    title: 'IIT-JEE & NEET Coaching in Lucknow | Gravity Classes | 99.973 Percentile Topper',
    description: 'Top IIT-JEE Main & Advanced and NEET-UG coaching at Gravity Classes Lucknow. 771/814 cracked JEE Main 2026. Lucknow City Topper Ojas Singhal scored 99.973 percentile. School Integrated Programs (SIP) available.',
  },
  '/courses': {
    title: 'Courses & Fee Structure | Gravity Classes Lucknow | JEE, NEET, Foundation',
    description: 'Explore IIT-JEE, NEET, and Foundation courses at Gravity Classes Lucknow. 2-year & 1-year programs for Class 8-12 & Droppers. Fees from ₹40,000. Up to 90% scholarship available. Enroll now!',
  },
  '/results': {
    title: 'Results 2026 | 771/814 Cracked JEE Main | Gravity Classes Lucknow',
    description: '771 out of 814 Gravity students cracked JEE Main 2026 — best result in India. Lucknow City Topper Ojas Singhal scored 99.973 percentile. 33+ students above 99 percentile. View all results.',
  },
  '/contact': {
    title: 'Contact Gravity Classes Lucknow | 6 Centers | Admissions Open 2026-27',
    description: 'Contact Gravity Classes at +91 84000 02983. Visit our 6 centers: Hazratganj, Indira Nagar (Head Office), Gomti Nagar, Aliganj, Alambagh & Ansal. Mon-Sat, 8 AM - 8 PM.',
  },
}

export default function SEOHead() {
  const { pathname } = useLocation()
  const seo = SEO_DATA[pathname] || SEO_DATA['/']

  useEffect(() => {
    document.title = seo.title

    let metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description)
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', `https://gravityclasses.com${pathname === '/' ? '' : pathname}`)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', seo.title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', seo.description)

    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', `https://gravityclasses.com${pathname === '/' ? '' : pathname}`)

    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', seo.title)

    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', seo.description)
  }, [pathname, seo])

  return null
}
