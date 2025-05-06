'use client'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <footer className="bg-base-200 text-base-content p-6 mt-10" data-aos="fade-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold">Mohammed Khalifa</h4>
          <p className="text-sm">Front-End Developer | React & Next.js Enthusiast</p>
        </div>

        <div className="flex gap-6">
          <a
            href="mailto:mhmadkhlifah79@gmail.com"
            className="link link-hover flex items-center gap-1"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-khlifah-89a804297"
            target="_blank"
            className="link link-hover flex items-center gap-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/mhmad79"
            target="_blank"
            className="link link-hover flex items-center gap-1"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

        <p className="text-sm text-center md:text-right">© {new Date().getFullYear()} Mohammed Khalifa. All rights reserved.</p>
      </div>
    </footer>
  )
}
