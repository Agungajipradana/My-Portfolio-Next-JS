import imageProjectHooBank from "./../../assets/images/projects/project1.jpg";
import imageProjectCarHub from "./../../assets/images/projects/project2.jpg";
import imageNetflixClone from "./../../assets/images/projects/netflixClone.jpg";
import imageProjectPortfolio from "./../../assets/images/projects/project3.jpg";
import imageProjectExpress from "./../../assets/images/projects/express.png";
import imageEcommerce from "./../../assets/images/projects/ecommerce.jpg";
import imageTodoList from "./../../assets/images/projects/todoList.jpg";
import imageHomeProperty from "./../../assets/images/projects/homeProperty.jpg";
import imageHTML from "../../assets/images/techStack/html.svg";
import imageCSS from "../../assets/images/techStack/css.svg";
import imageSASS from "../../assets/images/techStack/sass.svg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageTS from "../../assets/images/techStack/ts.svg";
import imageReact from "../../assets/images/techStack/react.svg";
import imageNext from "../../assets/images/techStack/nextjs.svg";
import imageExpress from "../../assets/images/techStack/express.svg";
import imagePostgre from "../../assets/images/techStack/postgresql.svg";
import imageTailwind from "../../assets/images/techStack/tailwind.svg";
import imageBootstrap from "../../assets/images/techStack/bootstrap.svg";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardProject from "@/components/Fragments/CardProject";
import ShowMoreButton from "@/components/Elements/Button";
import { Project } from "@/types";

const AllProject = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projectData: Project[] = [
    {
      imageSrc: imageProjectHooBank.src,
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
    {
      imageSrc: imageProjectCarHub.src,
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
    {
      imageSrc: imageHomeProperty.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "Home Property",
      description:
        "Explore the world of real estate with Home Property. This project, developed using HTML, Bootstrap, and JavaScript, offers a glimpse into the latest trends in home buying. Browse through property listings and discover your dream home.",
      techUsed: [
        { name: "HTML", icon: imageHTML },
        { name: "Bootstrap", icon: imageBootstrap },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "/404",
      viewCodeLink: "https://github.com/Agungajipradana/Home-Property",
    },
    {
      imageSrc: imageProjectPortfolio.src,
      imageWidth: 350,
      imageHeight: 300,
      title: "My First Portfolio",
      description:
        "Witness the journey of a developer with My First Portfolio. Crafted with HTML, CSS, and JavaScript, this portfolio showcases projects and skills. Explore the live preview to learn more about the developer's capabilities.",
      techUsed: [
        { name: "HTML", icon: imageHTML },
        { name: "CSS", icon: imageCSS },
        { name: "JavaScript", icon: imageJS },
      ],
      livePreviewLink: "https://agungaji.agung-ajiaji.repl.co/",
      viewCodeLink: "https://github.com/Agungajipradana/My-Portfolio.git",
    },
    {
      imageSrc: imageProjectExpress.src,
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
      imageSrc: imageProjectExpress.src,
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
      imageSrc: imageProjectExpress.src,
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

export default AllProject;
