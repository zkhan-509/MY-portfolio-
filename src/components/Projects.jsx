const projects = [
  {
    title: "Todo App",
    desc: "Full-stack todo app with user auth — React frontend, Node.js/Express backend, MongoDB database.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    emoji: "✅",
    github: "https://github.com/yourusername/todo-app",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio — built with React + Vite + Tailwind CSS. Fully responsive with dark theme.",
    tags: ["React", "Vite", "Tailwind"],
    emoji: "💼",
    github: "https://github.com/yourusername/portfolio",
    demo: "#",
  },
  {
    title: "Student Management System",
    desc: "CRUD app for managing student records — Express REST API, MySQL database, React frontend.",
    tags: ["React", "Express", "MySQL"],
    emoji: "🎓",
    github: "https://github.com/yourusername/student-mgmt",
    demo: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">What I've Built</p>
      <h2 className="font-syne font-bold text-4xl mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title}
            className="bg-[#13131a] border border-[#1e1e2e] rounded-xl p-6 hover:border-[#5b8fff] hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <div className="text-3xl mb-4">{p.emoji}</div>
            <h3 className="font-syne font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-[#8888aa] text-sm mb-4 flex-1 leading-relaxed">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(t => (
                <span key={t}
                  className="bg-[#5b8fff]/10 border border-[#5b8fff]/20 text-[#5b8fff] text-xs px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={p.github} target="_blank" rel="noreferrer"
                className="text-xs text-[#8888aa] hover:text-white border border-[#1e1e2e] hover:border-[#5b8fff] px-3 py-1.5 rounded-lg transition-colors">
                GitHub
              </a>
              <a href={p.demo}
                className="text-xs text-[#8888aa] hover:text-white border border-[#1e1e2e] hover:border-[#22d3a5] px-3 py-1.5 rounded-lg transition-colors">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
