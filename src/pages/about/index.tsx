import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const About = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div id="about" className={`py-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="flex flex-wrap mb-24 mt-20">
        <div className={`flex mx-10 max-w-full max-h-full lg:justify-start lg:items-start lg:text-start lg:mx-40 lg:box-border lg:border-4-none lg:mt-20 ${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
          <div>
            <h1 className="font-semibold text-2xl uppercase lg:text-3xl">About Me</h1>
            <div className="pt-5 text-sm lg:text-base lg:w-1/2 lg:h-40 lg:text-left lg:pb-10">
              <p>
                I am a person who likes to pay attention to details in life. I found myself drawn to Web Developer because I wanted to build a website that would help other people. I`ve always felt challenged to create inovative websites to
                solve life`s problems.
              </p>
              <button className={`btn mt-5 ${isDarkMode ? "bg-gray-900 text-slate-50 hover:bg-slate-200 hover:text-gray-900" : "bg-slate-200 text-gray-900 hover:bg-gray-900 hover:text-slate-200"}`}>My Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
