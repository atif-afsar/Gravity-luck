import Hero from '../Components/Courses/Hero'
import AllCourses from '../Components/Courses/AllCourses'
import CourseHighlights from '../Components/Courses/CourseHighlights'
import BatchSchedule from '../Components/Courses/BatchSchedule'
import CourseFAQ from '../Components/Courses/CourseFAQ'
import CourseCTA from '../Components/Courses/CourseCTA'

export default function Courses() {
  return (
    <main className="pt-20">
      <Hero />
      <AllCourses />
      <CourseHighlights />
      <BatchSchedule />
      <CourseFAQ />
      <CourseCTA />
    </main>
  )
}
