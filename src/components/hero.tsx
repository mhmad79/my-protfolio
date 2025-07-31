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
          Developed interactive web applications using React.js, Next.js, TypeScript, and Tailwind CSS.
           Created dynamic dashboards and reusable UI components focused on responsiveness and user experience.
           Integrated RESTful APIs and ensured seamless data flow between the front-end and server-side logic.
           Utilized Next.js features such as SSR, SSG, and dynamic routing to enhance performance and SEO.
           Collaborated with cross-functional teams including designers and back-end developers
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
