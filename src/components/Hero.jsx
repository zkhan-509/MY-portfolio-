import { motion } from "framer-motion"
import { ArrowRight, Download } from "lucide-react"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <div>
        {/* Badge — Framer Motion fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#5b8fff]/10 border border-[#5b8fff]/25 rounded-full px-4 py-1.5 text-xs text-[#5b8fff] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#22d3a5] inline-block animate-pulse" />
          Seeking for Internship Opportunities
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-syne font-extrabold text-5xl md:text-7xl leading-tight mb-4"
        >
          Full Stack<br />
          <span className="bg-gradient-to-r from-[#5b8fff] to-[#22d3a5] bg-clip-text text-transparent">
            Developer
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#8888aa] text-lg max-w-xl mb-8 leading-relaxed"
        >
          Fresh CS graduate from Pakistan — skilled in{" "}
          <span className="text-white">React, Node.js, Express</span> & databases.
          Seeking my first professional opportunity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <Link to="/contact"
            className="flex items-center gap-2 bg-gradient-to-r from-[#5b8fff] to-[#7c3aed] text-white px-7 py-3 rounded-lg font-medium text-sm hover:opacity-85 transition-opacity">
            Hire Me <ArrowRight size={16} />
          </Link>
          <Link to="/projects"
            className="border border-[#1e1e2e] text-white px-7 py-3 rounded-lg text-sm hover:border-[#5b8fff] transition-colors">
            View Projects
          </Link>
          <a 
  href="/zainaa's cv.docx"
  download
  className="flex items-center gap-2 border border-[#1e1e2e] text-[#8888aa] px-7 py-3 rounded-lg text-sm hover:border-[#22d3a5] hover:text-white transition-colors"
>
  <Download size={15} /> Download CV
</a>
        </motion.div>
      </div>
    </section>
  )
}
