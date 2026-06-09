import { motion } from "framer-motion"

const stats = [
  { num: "5+",   label: "Projects Built" },
  { num: "4",    label: "Tech Stacks" },
  { num: "2026", label: "CS Graduate" },
  { num: "100%", label: "Dedication" },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#13131a] border-y border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">About Me</p>
          <h2 className="font-syne font-bold text-4xl mb-6">
            Fresh Graduate,<br />Real Skills
          </h2>
          <p className="text-[#8888aa] mb-4 leading-relaxed">
            I'm a <span className="text-white font-medium">Computer Science graduate</span> from
            Pakistan, passionate about building full-stack web applications.
          </p>
          <p className="text-[#8888aa] mb-4 leading-relaxed">
            Currently <span className="text-white font-medium">seeking internship opportunities</span> where
            I can contribute and grow alongside experienced developers.
          </p>
          <p className="text-[#8888aa] leading-relaxed">
            Fast learner, team player, always eager to write{" "}
            <span className="text-white font-medium">clean, maintainable code</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map(s => (
            <div key={s.label}
              className="bg-[#0a0a0f] border border-[#1e1e2e] rounded-xl p-6 text-center hover:border-[#5b8fff] transition-colors">
              <div className="font-syne font-extrabold text-3xl text-[#5b8fff] mb-1">{s.num}</div>
              <div className="text-xs text-[#8888aa]">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
