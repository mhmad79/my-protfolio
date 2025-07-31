'use client'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import { Mail, Phone, Linkedin } from 'lucide-react'

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="resume" className="p-6 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Resume
        </h2>

        {/* Personal Info */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" /> mhmadkhlifah79@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> (+20) 1141663546
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/mohammed-khlifah-89a804297"
                target="_blank"
                className="link link-hover"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p>
            <strong>Bachelor’s in Management Information Systems (MIS)</strong><br />
            Higher Institute of Computers and Information Systems, Cairo<br />
            10/09/2020 – 25/05/2025 Cairo, Egypt
          </p>
        </div>

        {/* Experience */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <p>
            <strong>Front-End Developer Intern</strong> <br />
            15/12/2024 – 13/03/2025, Cairo<br />
            - Developed interactive apps with React, Next.js, and TypeScript.<br />
            - Integrated RESTful APIs and improved UI/UX with Tailwind & Figma.<br />
            - Utilized SSR, SSG and dynamic routing with Next.js.
          </p>
        </div>

        {/* Certificates
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Certificates & Trainings</h3>
          <p>
            Add any certifications or online course links (e.g., from Coursera, Udemy).
          </p>
        </div> */}
      </div>
    </section>
  )
}
