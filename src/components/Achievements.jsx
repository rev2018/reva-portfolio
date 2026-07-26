import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineCalendar, HiOutlineOfficeBuilding } from "react-icons/hi";
import FadeIn, { Stagger, StaggerItem } from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { achievements } from "../data/content";

function AchievementCard({ achievement, onExpand }) {
  return (
    <div className="card !p-0 overflow-hidden">
      <button
        type="button"
        onClick={() => onExpand(achievement)}
        className="block w-full overflow-hidden cursor-zoom-in"
        aria-label={`View larger image for ${achievement.title}`}
      >
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-auto object-contain object-center transition-transform duration-500 hover:scale-105"
        />
      </button>
      <div className="p-7 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-slate-lightest mb-2">{achievement.title}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-accent mb-4">
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineCalendar className="text-sm" />
            {achievement.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HiOutlineOfficeBuilding className="text-sm" />
            {achievement.issuer}
          </span>
        </div>
        <p className="text-slate text-base leading-relaxed">{achievement.desc}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="achievements" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-28">
      <FadeIn>
        <SectionHeader number="05" title="Achievements" />
      </FadeIn>

      <Stagger className="grid sm:grid-cols-2 gap-6" stagger={0.1}>
        {achievements.map((achievement) => (
          <StaggerItem key={achievement.title}>
            <AchievementCard achievement={achievement} onExpand={setExpanded} />
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-navy-dark/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expanded.image}
                alt={expanded.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl shadow-card"
              />
              <button
                type="button"
                onClick={() => setExpanded(null)}
                aria-label="Close image"
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-navy-light border border-navy-lightest flex items-center justify-center text-slate-lightest hover:text-accent hover:bg-navy-lightest transition-colors"
              >
                <HiOutlineXMark className="text-xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
