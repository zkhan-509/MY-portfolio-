import { motion } from "framer-motion"
import { Globe, Zap, Atom, Server, Train, Database, Network, GitBranch } from "lucide-react"

const skills = [
  { name: "HTML & CSS",            Icon: Globe,     level: 90, label: "Advanced" },
  { name: "JavaScript",            Icon: Zap,       level: 80, label: "Intermediate–Advanced" },
  { name: "React.js",              Icon: Atom,      level: 80, label: "Intermediate–Advanced" },
  { name: "Node.js",               Icon: Server,    level: 70, label: "Intermediate" },
  { name: "Express.js",            Icon: Train,     level: 70, label: "Intermediate" },
  { name: "Databases (SQL/NoSQL)", Icon: Database,  level: 65, label: "Intermediate" },
  { name: "Networking Basics",     Icon: Network,   level: 60, label: "Foundational" },
  { name: "Git & GitHub",          Icon: GitBranch, level: 75, label: "Intermediate" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">What I Know</p>
      <h2 className="font-syne font-bold text-4xl mb-12">Technical Skills</h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {skills.map(({ name, Icon, level, label }) => (
          <motion.div
            key={name}
            variants={item}
            whileHover={{ y: -5, borderColor: "#5b8fff" }}
            className="bg-[#13131a] border border-[#1e1e2e] rounded-xl p-5 transition-colors cursor-default"
          >
            {/* Lucide icon */}
            <Icon size={22} className="text-[#5b8fff] mb-3" />
            <div className="font-medium text-sm mb-3">{name}</div>

            {/* Skill bar */}
            <div className="bg-[#1e1e2e] rounded-full h-1 overflow-hidden mb-2">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#5b8fff] to-[#22d3a5]"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            <div className="text-xs text-[#8888aa]">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
