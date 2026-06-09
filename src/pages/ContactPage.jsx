import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import axios from "axios"
import { Mail, Linkedin, Github, Download, Send, Copy, Check } from "lucide-react"

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("your@email.com")
    setCopied(true)
    toast.success("Email copied!")
    setTimeout(() => setCopied(false), 2000)
  }

  // Form submit — Axios se API call
  // (Formspree ya EmailJS use karo real project mein)
  const onSubmit = async (data) => {
    setSending(true)
    try {
      // Replace with your Formspree endpoint:
      // await axios.post("https://formspree.io/f/YOUR_ID", data)

      // Demo: simulate a delay
      await new Promise(r => setTimeout(r, 1200))

      toast.success("Message sent! I'll reply soon 🚀")
      reset()
    } catch (err) {
      toast.error("Something went wrong. Try emailing directly.")
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      <p className="text-xs uppercase tracking-widest text-[#5b8fff] mb-2">Get In Touch</p>
      <h2 className="font-syne font-bold text-4xl mb-12">Let's Work United</h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Left — contact links */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <p className="text-[#8888aa] mb-4 leading-relaxed">
            Actively looking for internship opportunities. I'd love to connect!
          </p>

          <button onClick={copyEmail}
            className="flex items-center gap-3 bg-[#13131a] border border-[#1e1e2e] hover:border-[#5b8fff] text-sm text-[#8888aa] hover:text-white px-5 py-3.5 rounded-xl transition-all text-left">
            <Mail size={17} className="text-[#5b8fff]" />
            zainakhan8484@gmail.com
            <span className="ml-auto">
              {copied ? <Check size={15} className="text-[#22d3a5]" /> : <Copy size={15} />}
            </span>
          </button>

          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-[#13131a] border border-[#1e1e2e] hover:border-[#5b8fff] text-sm text-[#8888aa] hover:text-white px-5 py-3.5 rounded-xl transition-all">
            <Linkedin size={17} className="text-[#5b8fff]" />
            LinkedIn Profile
          </a>

          <a href="https://github.com/zkhan-509" target="_blank" rel="noreferrer"
            className="flex items-center gap-3 bg-[#13131a] border border-[#1e1e2e] hover:border-[#22d3a5] text-sm text-[#8888aa] hover:text-white px-5 py-3.5 rounded-xl transition-all">
            <Github size={17} className="text-[#22d3a5]" />
            GitHub Profile
          </a>
          <a 
            href="/zainaa's cv.docx"
             download
            className="flex items-center gap-3 bg-gradient-to-r from-[#5b8fff] to-[#7c3aed] text-white text-sm px-5 py-3.5 rounded-xl hover:opacity-85 transition-opacity">
           <Download size={17} /> Download My CV
            </a>
          
        </motion.div>

        
      </div>
    </div>
  )
}
