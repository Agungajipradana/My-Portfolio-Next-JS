import imagePortfolio from "./../../assets/images/projects/project3.jpg";
import imageHomeProperty from "./../../assets/images/projects/homeProperty.jpg";
import imageHTML from "../../assets/images/techStack/html.svg";
import imageCSS from "../../assets/images/techStack/css.svg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageBootstrap from "../../assets/images/techStack/bootstrap.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardProject from "@/components/Fragments/CardProject";
import ShowMoreButton from "@/components/Elements/Button";
import { Project } from "@/types";

const HTMLProject = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData: Project[] = [
    {
      imageSrc: imageHomeProperty.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Home Property",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      techUsed: [
        { name: "HTML", icon: imageHTML },
        { name: "Bootstrap", icon: imageBootstrap },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/Home-Property",
    },
    {
      imageSrc: imagePortfolio.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "My First Portfolio",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      techUsed: [
        { name: "HTML", icon: imageHTML },
        { name: "CSS", icon: imageCSS },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "https://agungaji.agung-ajiaji.repl.co/",
      viewCodeLink: "https://github.com/Agungajipradana/My-Portfolio.git",
    },
  ];

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <div className={`py-2 w-full ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className={`flex justify-center items-center text-center my-5 ${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
        <div className={`mx-20 gap-2 pt-5 pb-4 mt-2 lg:max-w-full lg:max-h-full `}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectData.slice(0, visibleProjects).map((project, index) => (
              <CardProject key={index} project={project} isDarkMode={isDarkMode} />
            ))}
          </div>
          <div>{visibleProjects < projectData.length && <ShowMoreButton onClick={showMoreProjects} />}</div>
        </div>
      </div>
    </div>
  );
};

export default HTMLProject;
