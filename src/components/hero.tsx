export default function Hero() {
    return (
      <div className="hero bg-base-200 min-h-screen" id="about">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/my3.jpeg" // ضع صورة شخصية لك هنا أو استخدم رابط خارجي
            alt="Mohammed Khalifa"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hello, I'm Mohammed Khalifa</h1>
            <p className="py-6 max-w-xl">
              I'm a passionate Front-End Developer specializing in React, Next.js, and Tailwind CSS. 
              I focus on creating user-centric web applications that are both responsive and scalable. 
              Currently, I'm expanding my skillset into full-stack development, with a strong focus on API integration and dynamic UI designs.
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
    )
  }
  