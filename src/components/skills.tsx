import {
    Code2,
    FileCode,
    FileJson,
    FileType2,
    LayoutDashboard,
    Component,
    Github,
    Paintbrush,
    MousePointerClick,
    Network,
  } from "lucide-react";
  
  export default function Skills() {
    return (
      <section id="skills" className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <SkillItem icon={<Code2 />} name="HTML5" />
          <SkillItem icon={<FileCode />} name="CSS3" />
          <SkillItem icon={<FileJson />} name="JavaScript" />
          <SkillItem icon={<FileType2 />} name="TypeScript" />
          <SkillItem icon={<Component />} name="React.js" />
          <SkillItem icon={<LayoutDashboard />} name="Next.js" />
          <SkillItem icon={<Paintbrush />} name="Tailwind CSS" />
          <SkillItem icon={<Network />} name="API Integration" />
          <SkillItem icon={<Github />} name="Git & GitHub" />
          <SkillItem icon={<MousePointerClick />} name="Figma (UI/UX Design)" />
        </div>
      </section>
    );
  }
  
  function SkillItem({ icon, name }: { icon: React.ReactNode; name: string }) {
    return (
      <div className="flex items-center gap-4 p-4 bg-base-200 rounded-xl shadow-sm hover:shadow-lg transition">
        <div className="text-primary">{icon}</div>
        <span className="text-lg font-medium">{name}</span>
      </div>
    );
  }
  