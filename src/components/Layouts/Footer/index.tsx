import { useContext } from "react";
import { DarkModeContext } from "@/context/DarkMode";

const Footer = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <>
      <div className={` bottom-0 text-xs font-medium footer footer-center p-4 lg:text-sm ${isDarkMode ? "bg-gray-900 text-slate-50" : "bg-slate-200 text-gray-800"}`}>
        <p>Copyright © 2023 - All right reserved by Agung Aji Pradana</p>
      </div>
    </>
  );
};

export default Footer;
