import imageProject1 from "./../../assets/images/projects/project1.jpg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageReact from "../../assets/images/techStack/react.svg";
import imageTailwind from "../../assets/images/techStack/tailwind.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardProject from "@/components/Fragments/CardProject";
import ShowMoreButton from "@/components/Elements/Button";
import { Project } from "@/types";

const ReactProject = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData: Project[] = [
    {
      imageSrc: imageProject1.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Hoo Bank",
      description: "Hoo Bank is a modern banking application showcasing the latest trends in web development. Explore its features and user-friendly interface, built with cutting-edge technologies.",
      techUsed: [
        { name: "JavaScript", icon: imageJS },
        { name: "React", icon: imageReact },
        { name: "Tailwind CSS", icon: imageTailwind },
      ],
      livePreviewLink: "http://bank-modern-azure.vercel.app/",
      viewCodeLink: "https://github.com/Agungajipradana/bank-modern.git",
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

export default ReactProject;
