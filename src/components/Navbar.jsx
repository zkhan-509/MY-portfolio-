import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Code2 } from "lucide-react"

const links = [
  { label: "Home",     to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Contact",  to: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-[#1e1e2e]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo — Lucide icon */}
        <Link to="/" className="flex items-center gap-2">
         
          <span className="font-syne font-extrabold text-xl bg-gradient-to-r from-[#5b8fff] to-[#7c3aed] bg-clip-text text-transparent">
          Zaina Khan 
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm transition-colors ${
                  location.pathname === l.to
                    ? "text-white font-medium"
                    : "text-[#8888aa] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle — Lucide icon */}
        <button className="md:hidden text-[#8888aa]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#13131a] border-t border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className="text-[#8888aa] hover:text-white text-sm">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
