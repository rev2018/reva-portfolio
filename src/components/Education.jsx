import { HiOutlineAcademicCap, HiOutlineBadgeCheck } from "react-icons/hi";
import FadeIn, { Stagger, StaggerItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { education, certifications } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="06" title="Education & Certifications" />
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-10">
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineAcademicCap className="text-2xl text-accent" />
            <h3 className="font-bold text-slate-lightest text-lg">Education</h3>
          </div>
          {education.map((school) => (
            <div key={school.school} className="space-y-5">
              <p className="font-mono text-sm text-slate-light">{school.school}</p>
              <ul className="space-y-4 border-l border-navy-lightest pl-5">
                {school.items.map((item) => (
                  <li key={item.name} className="relative">
                    <span className="absolute -left-[26px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                    <p className="text-slate-lightest font-semibold">{item.name}</p>
                    <p className="text-slate text-sm font-mono mt-0.5">{item.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <HiOutlineBadgeCheck className="text-2xl text-accent" />
            <h3 className="font-bold text-slate-lightest text-lg">Certifications</h3>
          </div>
          <Stagger className="space-y-3" stagger={0.08}>
            {certifications.map((cert) => (
              <StaggerItem key={cert}>
                <div className="section-badge text-slate text-base leading-relaxed">{cert}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      </div>
    </section>
  );
}
