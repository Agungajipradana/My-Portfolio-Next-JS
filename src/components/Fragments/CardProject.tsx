import Image from "next/image";
import Link from "next/link";
import iconLink from "../../assets/images/projects/icon-link.svg";
import iconLinkDarkMode from "../../assets/images/projects/icon-link2.svg";
import iconGithub from "../../assets/images/projects/icon-github.svg";
import iconGithubDarkMode from "../../assets/images/projects/icon-github2.svg";
import { CardProjectProps } from "@/types";
import { useState } from "react";

const CardProject = ({ project, isDarkMode }: CardProjectProps) => {
  const [isLoadingLivePreview, setIsLoadingLivePreview] = useState(false);
  const [isLoadingViewCode, setIsLoadingViewCode] = useState(false);
  const { imageSrc, imageWidth, imageHeight, title, description, techUsed, livePreviewLink, viewCodeLink } = project;

  const handleLivePreviewClick = async (link: string) => {
    try {
      setIsLoadingLivePreview(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      window.open(link, "_blank");
    } finally {
      setIsLoadingLivePreview(false);
    }
  };

  const handleViewCodeClick = async (link: string) => {
    try {
      setIsLoadingViewCode(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      window.open(link, "_blank");
    } finally {
      setIsLoadingViewCode(false);
    }
  };

  return (
    <div className="max-w-xs bg-no-repeat bg-center rounded-lg border-gray-800 md:max-w-full lg:max-w-md overflow-hidden">
      <Image className="rounded-t-lg w-full h-[300px]" src={imageSrc} width={1000} height={500} sizes="100vw" alt={title} placeholder="blur" blurDataURL={imageSrc} />
      <div className="p-5 text-black bg-slate-200">
        <h5 className="mb-2 text-xl font-bold tracking-tight lg:text-2xl">{title.length >= 25 ? `${title.substring(0, 25)} ... ` : title}</h5>
        <p className="mb-3 font-normal text-sm text-left lg:text-md">{description.length >= 170 ? `${description.substring(0, 170)}...` : description}</p>
        <div className="flex flex-wrap gap-2">
          <p className="font-semibold text-sm text-left lg:text-md">Tech Used:</p>
          <div className="flex justify-between">
            {techUsed.map((tech, index) => (
              <Image key={index} src={tech.icon} alt={tech.name} className="w-8 h-8 py-2 px-2 mr-2 rounded-full flex justify-center items-center bg-white lg:py-2 lg:px-2 lg:w-10 lg:h-10" />
            ))}
          </div>
        </div>
        <div className="pt-4 grid grid-cols-2 gap-x-3">
          <div className="flex justify-center items-center box-border border-2-none gap-x-2 ">
            <Image src={isDarkMode ? iconLinkDarkMode : iconLink} alt="Link" className="w-5 h-5" />
            <button onClick={() => handleLivePreviewClick(livePreviewLink)} className="cursor-pointer">
              {isLoadingLivePreview ? <span className="loading loading-spinner loading-xs"></span> : "Live Preview"}
            </button>
          </div>
          <div className="flex justify-center items-center box-border border-2-none gap-x-2">
            <Image src={isDarkMode ? iconGithubDarkMode : iconGithub} alt="GitHub" className="w-5 h-5" />
            <button onClick={() => handleViewCodeClick(viewCodeLink)} className="cursor-pointer">
              {isLoadingViewCode ? <span className="loading loading-spinner loading-xs"></span> : "View Code"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
