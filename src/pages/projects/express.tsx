import imageProject1 from "./../../assets/images/projects/express.png";
import imageJS from "../../assets/images/techStack/js.svg";
import imageExpress from "../../assets/images/techStack/express.svg";
import imagePostgre from "../../assets/images/techStack/postgresql.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardProject from "@/components/Fragments/CardProject";
import ShowMoreButton from "@/components/Elements/Button";
import { Project } from "@/types";

const ExpressProject = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData: Project[] = [
    {
      imageSrc: imageProject1.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "RESTful API Todo List",
      description:
        "Manage your tasks seamlessly with the RESTful API Todo List. This project, built using Express, PostgreSQL, and JavaScript, provides a robust backend for handling todo items. Explore the live preview to experience efficient task management.",
      techUsed: [
        { name: "Express", icon: imageExpress },
        { name: "Postgress", icon: imagePostgre },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/RESTful-API-Express-Todo-List",
    },
    {
      imageSrc: imageProject1.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "RESTful API CRUD Product",
      description:
        "Explore the world of product management with the RESTful API CRUD Product. This project, implemented using Express, PostgreSQL, and JavaScript, provides comprehensive CRUD functionalities for handling product data. Dive into the live preview to witness efficient product management.",
      techUsed: [
        { name: "Express", icon: imageExpress },
        { name: "Postgress", icon: imagePostgre },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/RESTful-API-Express-CRUD-Product",
    },
    {
      imageSrc: imageProject1.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "RESTful API User Address Contact",
      description:
        "Enhance your user address book with the RESTful API User Address Contact. Leveraging Express, PostgreSQL, and JavaScript, this project provides RESTful services for managing user addresses and contacts. Immerse yourself in the live preview to explore streamlined user contact management.",
      techUsed: [
        { name: "Express", icon: imageExpress },
        { name: "Postgress", icon: imagePostgre },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/RESTful-API-user-address-contact",
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

export default ExpressProject;
