import { motion } from "framer-motion";

const videos = [
  {
    title: "Rankers Speak",
    description: "Stories from students who turned disciplined preparation into standout results.",
    tag: "Student Journey",
    duration: "08:24",
    embedUrl: "https://www.youtube.com/embed/XjDB-G6ksa4?si=syfhA-f8Yl-frkqz",
  },
  {
    title: "Classroom Insights",
    description: "A closer look at concept clarity, doubt solving, and exam-focused practice.",
    tag: "Inside Gravity",
    duration: "06:18",
    embedUrl: "https://www.youtube.com/embed/rkzOcZqJm10?si=yonAWzZRxF3OGiUo",
  },
  {
    title: "Mentorship Moments",
    description: "Guidance from faculty on strategy, consistency, and handling exam pressure.",
    tag: "Faculty Talk",
    duration: "05:42",
    embedUrl: "https://www.youtube.com/embed/KMIbE45mG3I?si=UOYiAVMhm0AJZmvr",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" },
  }),
};

function VideoFrame({ video, index }) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group overflow-hidden rounded-2xl md:rounded-3xl border border-[#c4c7c8]/35 bg-[#fcf8f8] premium-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,27,27,0.08)]"
    >
      <div className="relative aspect-video overflow-hidden bg-[#1c1b1b]">
        {video.embedUrl ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(170,200,64,0.28),transparent_34%),linear-gradient(135deg,#1c1b1b_0%,#313030_62%,#454747_100%)]">
            <div className="absolute left-4 top-4 rounded-full bg-[#AAC840] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1c1b1b]">
              {video.tag}
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-white/12 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">
              {video.duration}
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#AAC840] text-[#1c1b1b] shadow-[0_16px_40px_rgba(170,200,64,0.32)] transition-transform duration-300 group-hover:scale-110">
              <span className="material-symbols-outlined text-[34px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wide text-[#3a5a00]">
          <span className="h-2 w-2 rounded-full bg-[#AAC840]" />
          YouTube
        </div>
        <h3 className="text-[19px] font-semibold leading-tight sm:text-[22px]">{video.title}</h3>
        <p className="mt-3 text-[14px] leading-[1.65] text-[#444748] sm:text-[15px]">{video.description}</p>
      </div>
    </motion.article>
  );
}

export default function YouTubeVideos() {
  return (
    <section className="bg-[#f6f3f2] px-5 py-[60px] md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-5 sm:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#AAC840]/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-wide text-[#3a5a00]">
              <span className="material-symbols-outlined text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                smart_display
              </span>
              Watch Gravity in Action
            </div>
            <h2 className="text-[28px] font-bold leading-tight sm:text-[34px] md:text-[42px]">
              Learn from our classrooms, mentors, and achievers
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-[1.7] text-[#444748] md:text-[17px]">
            A curated space for result stories, preparation strategy, and institute moments from our YouTube channel.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {videos.map((video, index) => (
            <VideoFrame key={video.title} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
