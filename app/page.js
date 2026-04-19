'use client'

import { useEffect } from "react";

import AOS from "aos"
import "aos/dist/aos.css"; // Import AOS styles

import Image from "next/image";
import profile from "../public/profile.png"
import deloitte from "../public/deloitte.svg"
import dltx from "../public/dltx_logo.jpg"
import racq from "../public/racq.svg"
import workingmouse from "../public/workingmouse.svg"

import { AiFillLinkedin } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";


import AutoplayCarousel from "./components/AutoplayCarousel"
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      disable: function() {
        return window.innerWidth < 768; // Disable AOS on screens smaller than 768px (mobile)
      }
    });
  }, []);

  return (
    <main className="dark:bg-neutral-900">
      <section className="min-h-screen flex flex-col bg-gradient-to-t from-red-200 to-amber-50 dark:from-stone-900 dark:to-stone-700">
        <Navbar />

        <Hero />

        <div className="carousel-container overflow-hidden py-5 w-full h-full mt-auto"> <AutoplayCarousel /> </div>
      </section>

      {/* Expertise */}
      <section className="px-8 py-16 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
          <h2 className="text-center leading-12 text-rose-950 font-semibold py-6 dark:text-white" data-aos="fade-up">Deliver impactful solutions.</h2>
          <p className="text-center leading-7 mb-8 max-w-4xl mx-auto md:text-lg" data-aos="fade-up">By aligning technology with business objectives, I drive digital transformation, optimise processes, and enable organisations to achieve sustainable growth while maintaining compliance and security in an evolving IT landscape. Focusing on:</p>
          <div className="lg:grid lg:grid-cols-2">
          <div className="p-8">
            <h3 className="text-2xl py-2 text-rose-950 dark:text-white" data-aos="fade-up">Technology</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">I have expertise in <span className="font-bold">AWS, Azure, and application delivery</span>, ensuring scalable and secure solutions. My technical skills in <span className="font-bold">web development, databases, Python, and Java</span> enable me to understand the tech stack and requirements, facilitating effective solution design. With my robust foundation in technology, I bridge the gap between businesses and technology, delivering optimised, efficient, and impactful solutions tailored to business needs.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Consulting</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">In IT consulting, I <span className="font-bold">analyse business challenges, assess technology landscapes, and provide strategic recommendations</span> for optimised solutions. I excel in <span className="font-bold">structural problem-solving </span> and <span className="font-bold"> systematic analysis</span> to drive meaningful change. My expertise includes cloud adoption, application delivery, IT service management, and data migration, ensuring seamless implementation and value realisation.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Stakeholder Engagement</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">I collaborate with global and local clients across diverse industries to deliver value-driven solutions. By actively engaging with stakeholders, I ensure alignment between business needs and technology strategies, fostering<span className="font-bold"> seamless communication</span> and  <span className="font-bold">informed decision-making.</span> My approach emphasises <span className="font-bold">quality, collaboration, and user-centric outcomes,</span> ensuring that solutions meet both business objectives and end-user expectations while driving efficiency and innovation.</p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl text-rose-950 dark:text-white py-2" data-aos="fade-up">Project Management</h3>
            <p className="leading-7 md:text-lg" data-aos="fade-up">With a strong foundation in <span className="font-bold"> Agile, Scrum, and Waterfall</span> methodologies, I have  engaged as PMO in multiple deliveries with cross-functional teams for global clients. I ensure timely and efficient execution while <span className="font-bold">maintaining stringent governance</span> and <span className="font-bold">security protocols</span>. My experience includes producing detailed reports, managing Jira tickets, and facilitating key stakeholder engagements to ensure alignment between business objectives and technology solutions.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-8 py-16 md:px-30 lg:px-80">
        <h2 className="p-8 leading-12 dark:text-stone-400">Professional <span className="font-semibold text-rose-950 dark:text-white">Experience</span></h2>

        <div className="flex flex-col gap-6 mx-8">

          {/* RACQ */}
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <Image src={racq} width={100} height={40} className="mb-3" alt="RACQ" />
                <p className="font-semibold md:text-lg dark:text-white">Senior Technical Solution Analyst</p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-stone-400 mt-1 md:mt-0 md:text-right">Nov 2025 – Present · Brisbane</p>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 leading-6 md:text-base text-sm dark:text-stone-100">
              <li>Pioneered AI adoption by identifying high-value use cases and delivering squad-wide training, measurably lifting AI maturity across the team.</li>
              <li>Leveraged GitHub Copilot to accelerate analysis and solution design across 10+ digital initiatives, reducing documentation cycle times.</li>
              <li>Owned 120+ development tickets (user stories, technical tasks, acceptance criteria), ensuring end-to-end Agile delivery and full traceability.</li>
              <li>Led Agile uplift across 2 squads, standardising ways of working and enabling a predictable, sustainable delivery cadence.</li>
              <li>Facilitated IAM and IT risk audits across 2+ cycles, achieving compliance with security and governance standards.</li>
              <li>Enabled Adobe Journey Optimizer implementation to enhance customer journey orchestration and personalised communications at scale.</li>
            </ul>
          </div>

          {/* WorkingMouse */}
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <Image src={workingmouse} width={160} height={40} className="mb-3" alt="WorkingMouse" />
                <p className="font-semibold md:text-lg dark:text-white">Technical Business Analyst</p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-stone-400 mt-1 md:mt-0 md:text-right">Jun 2025 – Aug 2025 · Brisbane</p>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 leading-6 md:text-base text-sm dark:text-stone-100">
              <li>Onboarded within 2 weeks to a government platform modernisation project, rapidly establishing delivery momentum with developers.</li>
              <li>Analysed 2,200+ acceptance criteria to ensure alignment and traceability with complex business objectives.</li>
              <li>Facilitated workshops with executives and SMEs using Goal-Oriented Requirements Engineering, resolving requirement conflicts and reducing rework.</li>
              <li>Coordinated full UAT cycle, including defect triage, test scenario creation, and client-facing documentation including user guides and scope clarifications.</li>
              <li>Applied Agile and CI/CD practices, contributing iterative improvements for a government platform.</li>
            </ul>
          </div>

          {/* Deloitte */}
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <Image src={deloitte} width={130} height={40} className="bg-black px-4 py-2 rounded-lg mb-3" alt="Deloitte" />
                <p className="font-semibold md:text-lg dark:text-white">Engineering Strategy & Architecture Analyst</p>
                <p className="text-sm text-neutral-500 dark:text-stone-400">Cloud and Engineering Practice</p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-stone-400 mt-1 md:mt-0 md:text-right">Mar 2024 – Mar 2025 · Brisbane</p>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 leading-6 md:text-base text-sm mt-3 dark:text-stone-100">
              <li>Facilitated 100+ cross-border workshops and stand-ups, translating complex stakeholder requirements into actionable delivery plans.</li>
              <li>Developed automated PowerShell ETL scripts and Excel dashboards, eliminating 10+ hours/week of manual reporting and providing real-time KPI visibility.</li>
              <li>Managed 1,400+ Jira tickets and 30+ Confluence pages, maintaining accurate project records for a large-scale data migration.</li>
              <li>Authored 7+ Statements of Work (SOW) and business cases aligned to healthcare regulatory frameworks, supporting executive decision-making.</li>
              <li>Led practice development by transforming internal data into compelling visual narratives, showcasing business capabilities to senior leadership.</li>
            </ul>
          </div>

          {/* DLTx */}
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <Image src={dltx} width={130} height={50} className="rounded-lg mb-3" alt="DLTx Labs" />
                <p className="font-semibold md:text-lg dark:text-white">Junior Business Analyst</p>
                <p className="text-sm text-neutral-500 dark:text-stone-400">Blockchain and Fintech</p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-stone-400 mt-1 md:mt-0 md:text-right">Aug 2022 – Feb 2024 · Brisbane</p>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 leading-6 md:text-base text-sm mt-3 dark:text-stone-100">
              <li>Facilitated client-facing workshops, gathered requirements, and developed user story maps and process diagrams for technical specifications.</li>
              <li>Managed Agile ceremonies (stand-ups, sprint planning, retrospectives) and maintained requirements via Jira and Confluence.</li>
              <li>Created 50+ UX design frames and conducted user testing for multiple web application products.</li>
              <li>Advised 10+ client boards on blockchain and fintech solutions, communicating complex concepts to both technical and non-technical audiences.</li>
            </ul>
          </div>

          {/* UQ AI Collaboratory */}
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <p className="text-xl font-bold text-rose-950 dark:text-white">UQ AI Collaboratory</p>
                <p className="font-semibold md:text-lg dark:text-white">Research Intern</p>
                <p className="text-sm text-neutral-500 dark:text-stone-400">University of Queensland</p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-stone-400 mt-1 md:mt-0 md:text-right">Jan 2022 – Jun 2022 · Brisbane</p>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 leading-6 md:text-base text-sm mt-3 dark:text-stone-100">
              <li>Analysed and classified EEG data using Python and CNN-based ML algorithms, contributing to peer-reviewed depression detection research.</li>
              <li>Developed mobile application prototypes and conducted structured user research and usability testing.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="px-8 py-16 bg-rose-gray md:px-30 lg:px-80 dark:bg-neutral-900">
        <h2 className="p-8 leading-12 dark:text-stone-400">I've been in <span className="font-semibold text-rose-950 dark:text-white"> various industries</span> and <span className="font-semibold text-rose-950 dark:text-white">domains</span>:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-8">
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Insurance</p>
            <p className="pb-3 md:text-lg">Drove AI adoption and digital transformation across insurance products, owning 120+ Agile delivery tickets and enabling IAM governance and Adobe Journey Optimizer implementation at RACQ.</p>
          </div>
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Public Sector</p>
            <p className="pb-3 md:text-lg">Delivered government platform modernisation using Goal-Oriented Requirements Engineering, coordinating UAT cycles and applying Agile and CI/CD practices. Also delivered SOW and M365 migration proposals for public sector clients.</p>
          </div>
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Healthcare</p>
            <p className="pb-3 md:text-lg">Conducted due diligence and execution on data migration for a merger and acquisition in a highly regulated environment, maintaining compliance with data governance standards throughout.</p>
          </div>
          <div className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700" data-aos="fade-up">
            <p className="py-3 font-semibold text-lg md:text-xl dark:text-white">Blockchain and Fintech</p>
            <p className="pb-3 md:text-lg">Performed agile deliveries across the SDLC, collaborated with stakeholders for requirement elicitation, and advised 10+ client boards on blockchain and fintech solutions.</p>
          </div>
        </div>
      </section>

      <footer className="p-8 flex justify-end items-center bg-white dark:bg-black">
        <p>Designed and Developed by Jing Yang</p>
        <BiWinkSmile className="ml-2 text-xl"/>
      </footer>
    </main>
  );
}
