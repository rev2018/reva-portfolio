import FadeIn, { Stagger, StaggerItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="02" title="Skills & Tools" />
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="text-slate text-base md:text-lg leading-relaxed max-w-2xl -mt-6 mb-10">
          The toolkit I bring to a data team on day one — from querying and modeling to
          shipping dashboards stakeholders actually use.
        </p>
      </FadeIn>

      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
        {skillGroups.map((group) => (
          <StaggerItem key={group.title}>
            <div className="card !cursor-default">
              <h3 className="font-bold text-slate-lightest text-lg mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-accent border border-accent/40 rounded-full px-3 py-1.5 bg-accent/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
