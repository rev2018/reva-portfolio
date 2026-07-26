import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { experience } from "../data/content";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="03" title="Experience" />
      </FadeIn>

      <FadeIn delay={0.05}>
        <p className="text-slate text-base md:text-lg leading-relaxed max-w-2xl mb-10">
          Four internships, four different problems — each one shipped something real:
          a model, a dashboard, or a pipeline someone else now relies on.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-0">
          {/* Tabs */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-navy-lightest scrollbar-thin shrink-0"
          >
            {experience.map((job, i) => (
              <button
                key={job.company}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`relative whitespace-nowrap md:whitespace-normal text-left font-mono text-sm px-5 py-3.5 transition-colors duration-200 ${
                  active === i ? "text-accent bg-accent/5" : "text-slate hover:text-accent hover:bg-accent/5"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="exp-tab-indicator"
                    className="absolute inset-x-0 -bottom-px md:bottom-auto md:inset-y-0 md:-left-px h-0.5 md:h-auto md:w-0.5 bg-accent"
                  />
                )}
                {job.company}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="md:pl-8 pt-6 md:pt-0 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-slate-lightest">
                  {job.title}{" "}
                  <span className="text-accent">
                    @ {job.company}
                    {job.companySub && (
                      <span className="text-slate font-normal text-base"> · {job.companySub}</span>
                    )}
                  </span>
                </h3>
                <p className="font-mono text-sm text-slate mt-1.5 tracking-wide">
                  {job.duration.toUpperCase()}
                </p>

                <ul className="mt-6 space-y-3.5 max-w-2xl">
                  {job.points.map((point, i) => (
                    <li key={i} className="section-badge text-slate text-base leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
