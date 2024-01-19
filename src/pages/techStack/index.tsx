import imageHTML from "../../assets/images/techStack/html.svg";
import imageCSS from "../../assets/images/techStack/css.svg";
import imageJS from "../../assets/images/techStack/js.svg";
import imageTS from "../../assets/images/techStack/ts.svg";
import imageReact from "../../assets/images/techStack/react.svg";
import imageNext from "../../assets/images/techStack/nextjs.svg";
import imageExpress from "../../assets/images/techStack/express.svg";
import imagePostgre from "../../assets/images/techStack/postgresql.svg";
import imageTailwind from "../../assets/images/techStack/tailwind.svg";
import imageBootstrap from "../../assets/images/techStack/bootstrap.svg";
import imageRedux from "../../assets/images/techStack/redux.svg";
import imageGit from "../../assets/images/techStack/git.svg";
import imagePostman from "../../assets/images/techStack/postman.svg";
import imageNode from "../../assets/images/techStack/nodejs.svg";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import CardTechStack from "@/components/Fragments/CardTechStack";

const TechStack = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div id="techStack" className={`pt-2 pb-10  ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className={`flex justify-center items-center text-center lg:my-20 ${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
        <div>
          <h1 className="text-2xl font-semibold lg:text-3xl">My Tech Stack</h1>
          <p className="text-sm lg:text-base">Technologies I`ve been working with recently</p>
          <div className="max-w-full max-h-full mx-auto grid grid-cols-3 gap-8  pt-5 md:grid-cols-4 lg:grid-cols-4 lg:gap-16">
            <CardTechStack imageSrc={imageHTML.src} title="HTML5" />
            <CardTechStack imageSrc={imageCSS.src} title="CSS3" />
            <CardTechStack imageSrc={imageJS.src} title="JavaScript" />
            <CardTechStack imageSrc={imageTS.src} title="TypeScript" />
            <CardTechStack imageSrc={imageReact.src} title="React" />
            <CardTechStack imageSrc={imageNext.src} title="Next" />
            <CardTechStack imageSrc={imageExpress.src} title="Express" />
            <CardTechStack imageSrc={imagePostgre.src} title="PostgreSQL" />
            <CardTechStack imageSrc={imageTailwind.src} title="Tailwind" />
            <CardTechStack imageSrc={imageBootstrap.src} title="Bootstrap" />
            <CardTechStack imageSrc={imageRedux.src} title="Redux" />
            <CardTechStack imageSrc={imageGit.src} title="Git" />
            <CardTechStack imageSrc={imagePostman.src} title="Postman" />
            <CardTechStack imageSrc={imageNode.src} title="Node" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
