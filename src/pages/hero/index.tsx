import Image from "next/image";
import imageProfile2 from "../../assets/images/hero/profile2.jpeg";
import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const Hero = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div className={`py-10 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div
        className={`flex-wrap max-w-full max-h-full mx-8 pr-10 mt-10 shadow-xl bg-no-repeat bg-center rounded-lg lg:flex lg:justify-center lg:items-center lg:gap-x-24 lg:pb-10 lg:mx-40 ${
          isDarkMode ? "bg-gray-900 shadow-gray-900" : "bg-slate-200 shadow-slate-500"
        }`}
      >
        <div className="text-2xl mx-4 pt-5 text-slate-500 md:text-4xl lg:text-5xl">
          <h1>
            Hi 👋, <br />
            My name is <br />
            <span className={`${isDarkMode ? "text-slate-200" : "text-gray-800 "}`}> Agung Aji Pradana </span> <br /> I build things for web
          </h1>
        </div>
        <div className="box-border border-4-none pb-5 flex justify-center lg:justify-end">
          <div className="mt-20 py-2 px-2 border-none rounded-full flex h-64 w-64 object-cover lg:h-full lg:w-full lg:mt-2 ">
            <Image src={imageProfile2} alt="" placeholder="blur" blurDataURL="imageProfile2" className={`w-60 h-60 py-2 px-2 rounded-full flex justify-center items-center lg:w-80 lg:h-80 ${isDarkMode ? "bg-slate-200" : "bg-gray-800"}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
