import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="01" title="About Me" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-5 text-slate text-base md:text-lg leading-relaxed max-w-3xl">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p className="font-semibold text-slate-lightest">Tools I reach for most:</p>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 font-mono text-sm">
            {profile.techStack.map((tech) => (
              <li key={tech} className="section-badge">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
