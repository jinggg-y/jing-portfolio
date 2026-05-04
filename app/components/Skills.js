import Image from "next/image"
import aws from "../../public/aws.svg"
import azure from "../../public/microsoft-azure.svg"
import git from "../../public/git.png"
import react from "../../public/react.png"
import python from "../../public/python.svg"
import java from "../../public/java.svg"
import figma from "../../public/figma.png"
import confluence from "../../public/confluence.svg"
import jira from "../../public/jira.svg"

const skillCategories = [
  {
    category: "Cloud Platforms",
    skills: [
      { img: aws, title: "AWS", context: "Cloud architecture, solution design & production deployments" },
      { img: azure, title: "Microsoft Azure", context: "Cloud adoption, M365 migration & Azure DevOps" },
    ],
  },
  {
    category: "Languages & Frameworks",
    skills: [
      { img: python, title: "Python", context: "Data analysis, ETL automation & ML research" },
      { img: java, title: "Java", context: "Application development & system integration" },
      { img: react, title: "React.js", context: "Web application development" },
    ],
  },
  {
    category: "Dev & Design Tools",
    skills: [
      { img: git, title: "Git", context: "Version control, branching strategies & CI/CD workflows" },
      { img: figma, title: "Figma", context: "UX design, 50+ wireframes & usability testing" },
    ],
  },
  {
    category: "Delivery & Agile Tools",
    skills: [
      { img: jira, title: "Jira", context: "Agile delivery, 1,400+ tickets managed across projects" },
      { img: confluence, title: "Confluence", context: "Technical documentation, 30+ pages maintained" },
    ],
  },
]

export const Skills = () => {
  return (
    <section id="skills" className="px-8 py-16 md:px-30 lg:px-80">
      <h2 className="p-8 leading-12 dark:text-stone-400">
        Technical <span className="font-semibold text-rose-950 dark:text-white">Skills</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-8">
        {skillCategories.map(({ category, skills }) => (
          <div key={category} className="rounded-xl shadow-xl p-8 bg-white dark:bg-stone-800 dark:border dark:border-stone-700">
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-700 dark:text-rose-400 mb-5">{category}</p>
            <div className="space-y-4">
              {skills.map(({ img, title, context }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mt-0.5">
                    <Image src={img} alt={title} width={28} height={28} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm dark:text-white">{title}</p>
                    <p className="text-xs text-neutral-500 dark:text-stone-400 leading-5">{context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
