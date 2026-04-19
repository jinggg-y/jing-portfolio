import Image from "next/image";
import profile from "../../public/profile.png"

import { AiFillLinkedin } from "react-icons/ai";

export const Hero = () => {
    return (
        <div className="px-5 md:px-30 flex flex-col flex-grow">
            <div className="text-center p-7">
                <div className="relative mx-auto w-60 h-60 mb-3 bg-gradient-to-tr from-orange-200 rounded-t-full md:w-80 md:h-80">
                    <Image className="pt-4" src={profile} />
                </div>

                <h2 className="text-3xl py-5 mt-10 text-rose-900 font-bold md:text-4xl  lg:text-5xl dark:text-white">
                    I'm Jing Yang
                    <a className="text-blue-900 hover:text-blue-700 text-2xl inline-block align-middle pl-2 lg:text-4xl dark:text-blue-400" href="https://www.linkedin.com/in/jinggg">
                        <AiFillLinkedin />
                    </a>
                </h2>
                <h3 className="text-2xl text-neutral-700 leading-7.5 font-semibold lg:text-3xl dark:text-red-200">Senior Technical Solution Analyst</h3>

                <p className="text-md pt-10 leading-7 max-w-2xl mx-auto lg:text-lg" data-aos="flip-up" data-aos-duration="1000">
                    Delivering user-centric digital solutions, business process transformation, and technology modernisation.
                    Specialising in AI adoption, IAM governance, Agile delivery, and cross-functional stakeholder engagement.
                </p>

                <p className="text-md pt-4 leading-7 lg:text-lg max-w-2xl mx-auto" data-aos="flip-up" data-aos-duration="1000">Let's connect and make an impact!</p>
            </div>
        </div>
    )
}
