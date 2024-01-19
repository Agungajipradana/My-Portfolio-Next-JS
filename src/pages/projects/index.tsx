import imageCode from "./../../assets/images/projects/googlecode.png";
import imageHTML from "../../assets/images/techStack/html.svg";
import imageReact from "../../assets/images/techStack/react.svg";
import imageNext from "../../assets/images/techStack/nextjs.svg";
import imageExpress from "../../assets/images/techStack/express.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import ReactProject from "./react";
import NextProject from "./next";
import AllProject from "./allProject";
import ExpressProject from "./express";
import HTMLProject from "./html";
import ButtonProject from "@/components/Elements/Button/ButtonProject";

const Projects = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [activePanel, setActivePanel] = useState("all");

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <>
      <div id="projects" className={`pt-14 md:pt-10  ${isDarkMode ? "bg-gray-800 text-white" : "bg-white"} `}>
        <div className="flex-col justify-center items-center text-center mb-10">
          <h1 className="text-2xl lg:text-3xl">Project</h1>
          <p className="text-sm">Things I’ve built so far</p>
        </div>
        <div className="flex justify-center gap-2 items-center">
          <ButtonProject imageSrc={imageCode.src} onClick={() => setActivePanel("all")} title="All " activePanel={activePanel} />
          <ButtonProject imageSrc={imageReact.src} onClick={() => setActivePanel("react")} title="React" activePanel={activePanel} />
          <ButtonProject imageSrc={imageNext.src} onClick={() => setActivePanel("next")} title="Next" activePanel={activePanel} />
          <ButtonProject imageSrc={imageHTML.src} onClick={() => setActivePanel("html")} title="HTML" activePanel={activePanel} />
          <ButtonProject imageSrc={imageExpress.src} onClick={() => setActivePanel("express")} title="Express" activePanel={activePanel} />
        </div>
      </div>

      {/* Render konten berdasarkan panel aktif */}
      {activePanel === "all" && (
        <div className="tabPanel">
          <AllProject />
        </div>
      )}

      {activePanel === "react" && (
        <div className="tabPanel">
          {/* Render proyek React JS */}
          {/* Gantilah dengan konten React Project yang sesuai */}
          <ReactProject />
        </div>
      )}

      {activePanel === "next" && (
        <div className="tabPanel">
          {/* Render proyek Next JS */}
          <NextProject />
        </div>
      )}

      {activePanel === "html" && (
        <div className="tabPanel">
          <HTMLProject />
        </div>
      )}

      {activePanel === "express" && (
        <div className="tabPanel">
          <ExpressProject />
        </div>
      )}
    </>
  );
};

export default Projects;
