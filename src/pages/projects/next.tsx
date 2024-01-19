import imageCarHub from "./../../assets/images/projects/project2.jpg";
import imageNetflixClone from "./../../assets/images/projects/netflixClone.jpg";
import imageEcommerce from "./../../assets/images/projects/ecommerce.jpg";
import imageTodoList from "./../../assets/images/projects/todoList.jpg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageTS from "../../assets/images/techStack/ts.svg";
import imageNext from "../../assets/images/techStack/nextjs.svg";
import imageSASS from "../../assets/images/techStack/sass.svg";
import imageTailwind from "../../assets/images/techStack/tailwind.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardProject from "@/components/Fragments/CardProject";
import ShowMoreButton from "@/components/Elements/Button";
import { Project } from "@/types";

const NextProject = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData: Project[] = [
    {
      imageSrc: imageCarHub.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Car Hub",
      description: "Car Hub is a dynamic showcase of cutting-edge car models, built using TypeScript, Next.js, and styled with Tailwind CSS. Experience the future of online car exploration with a smooth and responsive interface.",
      techUsed: [
        { name: "TypeScript", icon: imageTS },
        { name: "Next", icon: imageNext },
        { name: "Tailwind CSS", icon: imageTailwind },
      ],
      livePreviewLink: "https://cars-showroom-auu4kqgs6-agungajipradana.vercel.app/",
      viewCodeLink: "https://github.com/Agungajipradana/cars_showroom.git",
    },
    {
      imageSrc: imageNetflixClone.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Netfilx Clone",
      description:
        "Explore the world of entertainment with this Netflix Clone. Developed using TypeScript, Next.js, and styled with Tailwind CSS, it brings the streaming experience to your fingertips. Dive into your favorite shows and movies with a sleek and responsive interface.",
      techUsed: [
        { name: "TypeScript", icon: imageTS },
        { name: "Next", icon: imageNext },
        { name: "Tailwind CSS", icon: imageTailwind },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/netflix-clone",
    },
    {
      imageSrc: imageEcommerce.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "E-Commerce",
      description:
        "Embark on a shopping spree with this E-Commerce project. Powered by TypeScript, Next.js, and styled with Tailwind CSS, it delivers a seamless online shopping experience. Browse products, add to cart, and enjoy the convenience of modern e-commerce.",
      techUsed: [
        { name: "TypeScript", icon: imageTS },
        { name: "Next", icon: imageNext },
        { name: "SASS", icon: imageSASS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/E-commerce-fullstack-nextjs",
    },
    {
      imageSrc: imageTodoList.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Todo List CRUD",
      description:
        "Stay organized with this Todo List CRUD application. Built using JavaScript, Next.js, and styled with Tailwind CSS, it offers a simple yet powerful task management solution. Create, update, and delete tasks effortlessly.",
      techUsed: [
        { name: "JavaScript", icon: imageJS },
        { name: "Next", icon: imageNext },
        { name: "Tailwind CSS", icon: imageTailwind },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/Frontend-NextJs-Todo-List",
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

export default NextProject;
