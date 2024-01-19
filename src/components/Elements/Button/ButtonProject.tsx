import { ButtonProjectProps } from "@/types";
import Image from "next/image";

const ButtonProject: React.FC<ButtonProjectProps & { activePanel: string }> = ({ onClick, title, activePanel, imageSrc }) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center bg-slate-200 text-black border rounded-lg py-1 px-1 text-xs md:p-2 md:text-lg lg:py-2 lg:px-3 lg:text-xl ${activePanel === title.toLowerCase() ? "bg-slate-400" : ""}`}
        onClick={onClick}
      >
        <Image className="w-6 h-6 mr-1 md:w-full md:h-6 md:mr-2" src={imageSrc} width="0" height="0" sizes="100vw" alt={title} />
        {title}
      </button>
    </div>
  );
};

export default ButtonProject;
