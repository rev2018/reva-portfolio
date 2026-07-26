import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import FadeIn, { Stagger, StaggerItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { projects } from "../data/content";

function ProjectCard({ project }) {
  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="card group !p-0 overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2.5 gap-3">
          <h3 className="text-xl font-bold text-slate-lightest">{project.title}</h3>
          <HiOutlineArrowTopRightOnSquare className="text-xl text-slate group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
        </div>
        <p className="text-slate text-base leading-relaxed mb-6 flex-1">{project.desc}</p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="04" title="Things I've Built" />
      </FadeIn>

      {featured && (
        <FadeIn delay={0.1} className="mb-10">
          <a
            href={featured.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid md:grid-cols-[1.1fr_1.4fr] gap-0 items-stretch bg-navy-light hover:bg-navy-lightest transition-colors duration-300 rounded-2xl overflow-hidden"
          >
            <div className="overflow-hidden h-56 md:h-full">
              <img
                src={featured.image}
                alt={`${featured.title} screenshot`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="font-mono text-xs text-accent tracking-wide mb-2">FEATURED PROJECT</p>
              <h3 className="text-2xl font-bold text-slate-lightest flex items-center gap-2">
                {featured.title}
                <HiOutlineArrowTopRightOnSquare className="text-lg text-slate group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </h3>
              <p className="text-slate text-base md:text-lg leading-relaxed mt-3 max-w-2xl">
                {featured.desc}
              </p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-accent mt-5">
                {featured.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </a>
        </FadeIn>
      )}

      <Stagger className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
        {rest.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
