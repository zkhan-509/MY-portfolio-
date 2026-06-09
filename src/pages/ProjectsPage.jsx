import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Todo App",
    desc: "Full-stack todo app with user auth — React frontend, Node.js/Express backend, MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    emoji: "✅",
    github: "https://github.com/zkhan-509/TODO-MERN",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio — built with React + Vite + Tailwind + Framer Motion.",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    emoji: "💼",
    github: "https://github.com/zkhan-509/MY-portfolio-",
    demo: "#",
  },
  {
    title: "Notes App",
    desc: "CRUD app — Express REST API, MonogoDB, React frontend.",
    tags: ["React", "Express", "CSS"],
    emoji: "🎓",
    github: "https://github.com/zkhan-509/Notes-app-Mern",
    demo: "#",
  },
  {
    title: "Weather App",
    desc: "Weather app using OpenWeather API + Axios for API calls.",
    tags: ["React", "Axios", "API"],
    emoji: "🌤️",
    github: "https://github.com/zkhan-509/Weather-app",
    demo: "#",
  },
  {
    title: "E-Commerce Backend",
    desc: "REST API with Node.js, Express, MongoDB — products, cart, auth endpoints.",
    tags: ["Node.js", "Express", "MongoDB"],
    emoji: "🛒",
    github: "https://github.com/zkhan-509/E-Commerce-api",
    demo: "#",
  },
  {
    title: "FYP",
    desc: "ECG Signal Detection , Node.js backend, React frontend.",
    tags: ["React", "Socket.io", "Node.js","Python"],
    emoji: "❤️",
    github: "https://github.com/zkhan-509/CAD_ECG_FrontEnd",
    demo: "#",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const card = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">What I've Built</p>
      <h2 className="font-syne font-bold text-4xl mb-12">Projects</h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-3 gap-6"
      >
        {projects.map(p => (
          <motion.div
            key={p.title}
            variants={card}
            whileHover={{ y: -6 }}
            className="bg-[#13131a] border border-[#1e1e2e] hover:border-[#5b8fff] rounded-xl p-6 flex flex-col transition-colors"
          >
            <div className="text-3xl mb-4">{p.emoji}</div>
            <h3 className="font-syne font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-[#8888aa] text-sm mb-4 flex-1 leading-relaxed">{p.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(t => (
                <span key={t}
                  className="bg-[#5b8fff]/10 border border-[#5b8fff]/20 text-[#5b8fff] text-xs px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Links — Lucide icons */}
            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#8888aa] hover:text-white border border-[#1e1e2e] hover:border-[#5b8fff] px-3 py-1.5 rounded-lg transition-colors">
                <Github size={13} /> GitHub
              </a>
             
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
