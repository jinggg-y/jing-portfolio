'use client'
import { useState, useEffect } from "react"
import DarkModeHandler from "./DarkModeHandler"

const navLinks = [
{ label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = navLinks.map(({ href }) => document.querySelector(href)).filter(Boolean);
      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

      if (nearBottom) {
        setActiveSection("#contact");
        return;
      }

      let current = "";
      sections.forEach(section => {
        if (section.offsetTop <= window.scrollY + 100) {
          current = `#${section.id}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  return (
    <nav className={`w-full p-5 flex justify-between items-center md:px-9 ${scroll ? "fixed z-40 top-0 bg-background dark:bg-black shadow-md" : ""}`}>
      <a href="#" className="text-2xl font-[marcellus] text-rose-950 font-bold dark:text-rose-500">JY</a>
      <ul className="flex items-center gap-1">
        {navLinks.map(({ label, href }) => (
          <li key={href} className="hidden md:block">
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`px-3 py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeSection === href
                  ? "text-rose-700 dark:text-rose-400 underline underline-offset-4"
                  : "text-neutral-500 hover:text-rose-700 dark:text-stone-400 dark:hover:text-rose-400"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="ml-4 pl-4 border-l border-neutral-200 dark:border-stone-600">
          <DarkModeHandler />
        </li>
        <li>
          <a className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md ml-2 text-white text-sm" href="/JingYang_CV.docx" download="JingYang_CV.docx">Resume</a>
        </li>
      </ul>
    </nav>
  )
}
