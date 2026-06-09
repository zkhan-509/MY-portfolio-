import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

export default function App() {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen overflow-x-hidden font-dm">
      {/* React Hot Toast — notification system */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#13131a",
            color: "#f0f0f8",
            border: "1px solid #1e1e2e",
          },
        }}
      />

      <Navbar />

      {/* React Router DOM — multiple pages */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact"  element={<ContactPage />} />
      </Routes>

      <footer className="text-center py-8 text-[#8888aa] text-sm border-t border-[#1e1e2e]">
        Built with React + Vite + Tailwind + Framer Motion · Open to Internship
      </footer>
    </div>
  )
}
