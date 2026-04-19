'use client'
import { useState, useEffect } from "react"

import DarkModeHandler from "./DarkModeHandler"

export const Navbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 10);
        });
      }, []);

    return (
        <nav className={`w-full p-5 flex justify-between md:px-9"} ${scroll ? "fixed z-40 top-0 bg-background shadow-md": ""}`}>
            <a href="#" className="text-2xl font-[marcellus] text-rose-950 font-bold dark:text-rose-500">JY</a>
            <ul className="flex items-center">
                <li>
                    <DarkModeHandler />
                </li>
                <li>
                    <a className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md ml-6 text-white" href="JingYang_CV.docx" download>Resume</a>
                </li>
            </ul>
        </nav>
    )
}