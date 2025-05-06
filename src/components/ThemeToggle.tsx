// components/ThemeToggle.jsx
"use client"
import { useState, useEffect } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme")
      if (storedTheme) {
        setTheme(storedTheme)
        document.documentElement.setAttribute("data-theme", storedTheme)
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline">
      {theme === "light" ? "🌙 dark " : "☀️  light"}
    </button>
  )
}
