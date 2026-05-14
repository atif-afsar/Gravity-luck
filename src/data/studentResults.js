/**
 * Student achievement records from /public/Results (single-student creatives).
 * Paths must match files on disk (no spaces — use subfolders iit/ / neet/).
 */

/** @typedef {'jee' | 'neet'} ExamTrack */

/**
 * @typedef {Object} StudentAchievement
 * @property {string} id
 * @property {string} name
 * @property {string} exam
 * @property {ExamTrack} examTrack
 * @property {string} headline
 * @property {string} [headlineSuffix]
 * @property {string} [subline]
 * @property {string} image
 * @property {string} imageAlt
 * @property {boolean} [topRanker]
 * @property {string} [cardBadge]
 */

/** @type {StudentAchievement[]} */
export const studentAchievements = [
  // —— JEE — premium / published greens + AIR creatives
  {
    id: "kavya-gupta",
    name: "Kavya Gupta",
    exam: "JEE Advanced",
    examTrack: "jee",
    headline: "AIR 25",
    subline: "All India Rank",
    image: "/Results/kavya-gupta.jpg",
    imageAlt: "Kavya Gupta, JEE Advanced AIR 25, Gravity Classes Lucknow",
    topRanker: true,
    cardBadge: "JEE Advanced",
  },
  {
    id: "ojas-singhal",
    name: "Ojas Singhal",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.973",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/iit/11.jpg",
    imageAlt: "Ojas Singhal, JEE Main percentile 99.973, Gravity Classes Lucknow",
    topRanker: true,
    cardBadge: "JEE Main",
  },
  {
    id: "aditya-panday",
    name: "Aditya Panday",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.963",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/aditya-panday.jpg",
    imageAlt: "Aditya Panday, JEE Main percentile 99.963, Gravity Classes Lucknow",
    topRanker: true,
    cardBadge: "JEE Main",
  },
  {
    id: "adnan-raza",
    name: "Adnan Raza",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.67",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/iit/10.jpg",
    imageAlt: "Adnan Raza, JEE Main percentile 99.67, Gravity Classes Lucknow",
    cardBadge: "JEE Main",
  },
  {
    id: "atharva-upadhyay",
    name: "Atharva Upadhyay",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.65",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/iit/12.jpg",
    imageAlt: "Atharva Upadhyay, JEE Main percentile 99.65, Gravity Classes Lucknow",
    cardBadge: "JEE Main",
  },
  {
    id: "ravindra-kumar",
    name: "Ravindra Kumar",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.4",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/iit/13.jpg",
    imageAlt: "Ravindra Kumar, JEE Main percentile 99.4, Gravity Classes Lucknow",
    cardBadge: "JEE Main",
  },
  {
    id: "mohd-ali-umar",
    name: "Mohd Ali Umar",
    exam: "JEE Main",
    examTrack: "jee",
    headline: "99.11",
    headlineSuffix: " %ile",
    subline: "Percentile · JEE Main",
    image: "/Results/iit/14.jpg",
    imageAlt: "Mohd Ali Umar, JEE Main percentile 99.11, Gravity Classes Lucknow",
    cardBadge: "JEE Main",
  },
  {
    id: "saksham-paliwal",
    name: "Saksham Paliwal",
    exam: "JEE Advanced",
    examTrack: "jee",
    headline: "AIR 264",
    subline: "All India Rank",
    image: "/Results/saksham-paliwal.jpg",
    imageAlt: "Saksham Paliwal, JEE Advanced AIR 264, Gravity Classes Lucknow",
    cardBadge: "JEE Advanced",
  },
  {
    id: "akshat-madhan",
    name: "Akshat Madhan",
    exam: "JEE Advanced",
    examTrack: "jee",
    headline: "AIR 246",
    subline: "All India Rank",
    image: "/Results/iit/air-24.jpeg",
    imageAlt: "Akshat Madhan, JEE Advanced AIR 246, Gravity Classes Lucknow",
    cardBadge: "JEE Advanced",
  },
  {
    id: "anuguru-parthiv",
    name: "Anuguru Parthiv",
    exam: "JEE Advanced",
    examTrack: "jee",
    headline: "AIR 285",
    subline: "All India Rank",
    image: "/Results/iit/air-285.jpg",
    imageAlt: "Anuguru Parthiv, JEE Advanced AIR 285, Gravity Classes Lucknow",
    cardBadge: "JEE Advanced",
  },
  {
    id: "bedanta-bhaumik",
    name: "Bedanta Bhaumik",
    exam: "JEE Advanced",
    examTrack: "jee",
    headline: "AIR 493",
    subline: "All India Rank",
    image: "/Results/iit/air-493.jpg",
    imageAlt: "Bedanta Bhaumik, JEE Advanced AIR 493, Gravity Classes Lucknow",
    cardBadge: "JEE Advanced",
  },

  // —— NEET — AIR + score creatives
  {
    id: "zahid-khan",
    name: "Zahid Khan",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "AIR 180",
    subline: "700 / 720 marks",
    image: "/Results/neet/air-18.jpeg",
    imageAlt: "Zahid Khan, NEET AIR 180, 700 out of 720 marks, Gravity Classes Lucknow",
    topRanker: true,
    cardBadge: "NEET UG",
  },
  {
    id: "panshul",
    name: "Panshul",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "631",
    subline: "NEET score / 720",
    image: "/Results/neet/17.jpg",
    imageAlt: "Panshul, NEET score 631 out of 720, Gravity Classes Lucknow",
    topRanker: true,
    cardBadge: "NEET UG",
  },
  {
    id: "yusuf",
    name: "Yusuf",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "625",
    subline: "NEET score / 720",
    image: "/Results/neet/15.jpg",
    imageAlt: "Yusuf, NEET score 625 out of 720, Gravity Classes Lucknow",
    cardBadge: "NEET UG",
  },
  {
    id: "vishal-singh",
    name: "Vishal Singh",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "590",
    subline: "NEET score / 720",
    image: "/Results/neet/16.jpg",
    imageAlt: "Vishal Singh, NEET score 590 out of 720, Gravity Classes Lucknow",
    cardBadge: "NEET UG",
  },
  {
    id: "mohammad-azaan",
    name: "Mohammad Azaan",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "AIR 207",
    subline: "697 / 720 marks",
    image: "/Results/neet/air-207.jpeg",
    imageAlt: "Mohammad Azaan, NEET AIR 207, Gravity Classes Lucknow",
    cardBadge: "NEET UG",
  },
  {
    id: "vijay-kumar",
    name: "Vijay Kumar",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "AIR 1144",
    subline: "676 / 720 marks",
    image: "/Results/neet/air-1144.jpg",
    imageAlt: "Vijay Kumar, NEET AIR 1144, Gravity Classes Lucknow",
    cardBadge: "NEET UG",
  },
  {
    id: "anil-verma",
    name: "Anil Verma",
    exam: "NEET UG",
    examTrack: "neet",
    headline: "AIR 2231",
    subline: "664 / 720 marks",
    image: "/Results/neet/air-2231.jpg",
    imageAlt: "Anil Verma, NEET AIR 2231, Gravity Classes Lucknow",
    cardBadge: "NEET UG",
  },
];

/** Marquee: topRanker first, then remaining in list order */
export const marqueeAchievers = [
  ...studentAchievements.filter((s) => s.topRanker),
  ...studentAchievements.filter((s) => !s.topRanker),
];

export const iitJeeSpotlight = studentAchievements.filter((s) => s.examTrack === "jee");

export const neetAchievers = studentAchievements.filter((s) => s.examTrack === "neet");

/** Home / SEO blocks — match published creatives */
export const jeeMainShowcaseStudent = studentAchievements.find((s) => s.id === "ojas-singhal");
export const neetShowcaseStudent = studentAchievements.find((s) => s.id === "panshul");
export const jeeAdvancedSpotlightStudent = studentAchievements.find((s) => s.id === "ojas-singhal");

export function getStudentResultsPayload() {
  return {
    version: 2,
    updated: "2026-05-13",
    students: studentAchievements.map(
      ({ id, name, exam, examTrack, headline, headlineSuffix, subline, image, imageAlt, topRanker }) => ({
        id,
        name,
        exam,
        examTrack,
        headline,
        headlineSuffix: headlineSuffix ?? null,
        subline: subline ?? null,
        image,
        imageAlt,
        topRanker: Boolean(topRanker),
      })
    ),
  };
}
