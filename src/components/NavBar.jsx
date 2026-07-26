import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navLinks } from "../data/content";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = navLinks.find((l) => l.href === `#${id}`);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/85 backdrop-blur-md border-b border-navy-lightest/60 shadow-lg shadow-navy-dark/40" : "bg-transparent"
      }`}
    >
      <nav className="max-w-content mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 xl:gap-10 min-w-0">
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium shrink-0">
            {navLinks.map((link) => (
              <li key={link.href} className="whitespace-nowrap">
                <a
                  href={link.href}
                  className={`capitalize transition-colors duration-200 ${
                    active === link.label ? "text-accent" : "text-slate-lightest hover:text-accent"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden text-slate-lightest text-2xl z-50"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 bg-navy-dark/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="capitalize font-mono text-2xl text-slate-lightest hover:text-accent"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
