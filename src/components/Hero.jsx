import { motion } from "framer-motion";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import ParticlePortrait from "./ParticlePortrait";
import FadeIn from "./FadeIn";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[92vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-content mx-auto px-6 md:px-10 pt-32 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <ParticlePortrait />
      </motion.div>

      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-lightest leading-[1.15]"
        >
          hey, <span className="text-accent">reva</span> here.
        </motion.h1>

        <FadeIn delay={0.2}>
          <p className="text-slate text-base md:text-lg mt-6 leading-relaxed max-w-lg">
            I'm a data analyst who builds predictive models, live dashboards, and automated
            pipelines that turn messy data into decisions teams can act on. Python, SQL, and
            BI tools are my everyday toolkit — four internships in, I'm ready to bring that
            to a full-time data analyst or data science role.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-9">
          <a href={profile.resumeUrl} download className="btn-outline">
            <HiOutlineDocumentArrowDown className="text-lg" />
            Resume
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
