import { HiOutlineLink } from "react-icons/hi";
import FadeIn from "./FadeIn";
import MailButton from "./MailButton";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
      <FadeIn>
        <p className="font-mono text-accent mb-4">What's next?</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-lightest mb-6">
          Let's work together!
        </h2>
        <p className="text-slate text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
         I'm actively looking for Data Analyst and Data Science opportunities where I can turn data into decisions from day one. If you're hiring, collaborating, or have an interesting dataset to discuss, I'd love your message to land in my inbox.
        </p>
        <MailButton email={profile.email} className="btn-outline !text-base !px-9 !py-4">
          Say hello
        </MailButton>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 font-mono text-sm text-slate">
          <a href={`mailto:${profile.email}`} className="link-accent">
            {profile.email}
          </a>
          <span className="hidden sm:inline text-navy-lightest">|</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent flex items-center gap-1.5"
          >
            <HiOutlineLink /> LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
