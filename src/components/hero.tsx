import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // تأكد من استيراد ملف CSS لتأثيرات AOS

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // التأثير يظهر مرة واحدة
    });
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/my-4.jpeg"
          alt="Mohammed Khalifa"
          className="max-w-xs rounded-lg shadow-2xl h-72 sm:h-full"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h1 className="text-2xl md:text-5xl font-bold">I&apos;m a frontend developer</h1>
          <p className="py-6 max-w-xl text-sm md:text-[15px]">
            I&apos;m a passionate Front-End Developer specializing in React, Next.js, and Tailwind CSS. 
            I focus on creating user-centric web applications that are both responsive and scalable. 
            Currently, I&apos;m expanding my skillset into full-stack development, with a strong focus on API integration and dynamic UI designs.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:mhmadkhlifah79@gmail.com"
              className="btn btn-primary"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-khlifah-89a804297"
              className="btn btn-outline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/mhmad79"
              className="btn btn-outline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
