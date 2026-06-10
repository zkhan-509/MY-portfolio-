import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("your@email.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">Get In Touch</p>
        <h2 className="font-syne font-bold text-4xl mb-4">Let's Work Together</h2>
        <p className="text-[#8888aa] mb-10">
          Actively looking for internship opportunities. Let's connect!
        </p>

        <div className="bg-[#13131a] border border-[#1e1e2e] rounded-2xl p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <button onClick={copyEmail}
              className="flex items-center justify-center gap-2 bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#5b8fff] text-sm text-[#8888aa] hover:text-white px-5 py-3 rounded-xl transition-all cursor-pointer">
              📧 {copied ? "Copied!" : "your@email.com"}
            </button>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#5b8fff] text-sm text-[#8888aa] hover:text-white px-5 py-3 rounded-xl transition-all">
              💼 LinkedIn
            </a>

            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a0a0f] border border-[#1e1e2e] hover:border-[#22d3a5] text-sm text-[#8888aa] hover:text-white px-5 py-3 rounded-xl transition-all">
              🐙 GitHub
            </a>

            <a href="/cv.pdf"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#5b8fff] to-[#7c3aed] text-white text-sm px-5 py-3 rounded-xl hover:opacity-85 transition-opacity">
              📄 Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
