'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Cafeteria Management System ",
      description:
        "Cafeteria Management System Full-stack web app for managing an institute cafeteria. Built using Next.js, NextAuth, and MongoDB.- User Role: Browse products, place orders, view order history.- Admin Role: Manage products, categories, update orders, assign user roles",
      image: "/proj-1.png",
      link: "https://project-cafetria.netlify.app/",
      github: 'https://github.com/mhmad79/project-cafetria.git',
      id:'Projects'
    },
    {
      title: "User & Locations Name Dashboard",
      description:
        "Interactive dashboard displaying user data with Google Maps integration. Built using React, TypeScript, Tailwind CSS,and Next.js. ",
      image: "/proj-2.png",
      link: '#',
      github:"https://github.com/mhmad79/nextjs.git"
    },
    {
      title: "E-commerce Makeup Website",
      description:
        "Makeup shopping site built with React and integrated with external APIs using Axios. Built using JavaScript and TailwindCSS.",
      image: "/proj-3.png",
      link: " https://e-commerc-web-sit-makeup.netlify.app/",
      github: 'https://github.com/mhmad79/E-commerc-web-sit-makeup.git '
    },
    {
      title: "E-commerce Technology Website ",
      description:
        "Tech product showcase website. Built using HTML, CSS, and JavaScript. ",
      image: "/proj-4.png",
      link: "https://classy-kringle-b1e13a.netlify.app/",
      github:' https://github.com/mhmad79/E-commerc-wsb-sit.git'
    },
    {
      title: "Baby Products E-commerce Website ",
      description:
        "E-commerce interface for baby products. Developed using HTML, CSS, JavaScript, and TypeScript. ",
      image: "/proj-5.png",
      link: " https://mhmad79.github.io/web-sit-for-shopping/",
      github: ' https://github.com/mhmad79/web-sit-for-shopping.git'
    },
    // باقي المشاريع...
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div
          key={index}
          id={project.id}
          className="card bg-base-100 shadow-sm"
          data-aos="fade-up"
          data-aos-delay={index * 200} // تأخير بين كل مشروع وآخر
        >
          <figure className="overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover" // التحكم في الحجم والتغطية
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>
            <div className="card-actions justify-end space-x-2">
              <a
                href={project.link}
                className="btn btn-primary w-32 text-center"
                target="_blank"
              >
                View Project
              </a>
              <a
                href={project.github}
                className="btn btn-primary w-32 text-center"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
