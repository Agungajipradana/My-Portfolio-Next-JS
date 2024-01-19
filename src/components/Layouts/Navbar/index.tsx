import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import imageGithub from "../../../assets/images/navbar/Github.svg";
import imageLinkedin from "../../../assets/images/navbar/linkedin.svg";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { DarkModeContext } from "@/context/DarkMode";

const navLink = [
  { label: "Home", path: "home" },
  { label: "About", path: "about" },
  { label: "Tech Stack", path: "techStack" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

const Navbar = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Cek apakah ada status darkMode yang tersimpan di local storage
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) {
      setIsDarkMode(JSON.parse(storedDarkMode));
    }

    const storedLightMode = localStorage.getItem("lightMode");
    if (storedLightMode) {
      setIsLightMode(JSON.parse(storedLightMode));
    }
    // eslint-disable-next-line
  }, []);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    setIsLightMode(false);

    if (!isDarkMode) {
      localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
      localStorage.removeItem("lightMode");
    } else {
      localStorage.removeItem("darkMode");
    }
  };

  return (
    <nav>
      {/* Desktop */}
      <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className={`hidden lg:flex max-w-full max-h-full justify-between text-slate-500 pt-5 font-medium items-center pb-10 mx-28 ${isDarkMode && "text-slate-50"}`}>
          <button className="swap swap-rotate hover:text-gray-800 transition duration-300 ease-out hover:ease-in" onClick={handleDarkMode}>
            <input type="checkbox" checked={isDarkMode} readOnly />
            <div className="swap-on">
              <svg className={`fill-current w-10 h-10 ${isDarkMode && "text-slate-50"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </div>

            <div className="swap-off">
              <svg className="fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </div>
          </button>

          <div className="space-x-4 text-lg cursor-pointer">
            {navLink.map((item) => (
              <ScrollLink
                key={item.path}
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={`hover:text-gray-800 transition duration-300 ease-out hover:ease-in ${isDarkMode && "hover:text-slate-300 text-slate-50"}`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>
          <div className="flex space-x-2 mr-2 items-center ">
            <Link href="https://github.com/Agungajipradana" target="_blank" className="tooltip tooltip-bottom" data-tip="Github">
              <Image
                src={imageGithub}
                alt={"imageGithub"}
                width={1000}
                height={500}
                className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-full h-full ${isDarkMode && "hover:bg-slate-200"}`}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/agungajipradana/" target="_blank" className="tooltip tooltip-bottom" data-tip="Linkedin">
              <Image
                src={imageLinkedin}
                alt={"imageLinkedin"}
                width={1000}
                height={500}
                className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-full h-full ${isDarkMode && "hover:bg-slate-200"}`}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className={`flex justify-between items-center mx-6 text-slate-500 h-full max-w-full pt-2 lg:hidden ${isDarkMode && "text-slate-50"}`}>
          <div className="flex items-center gap-x-1">
            <button className="swap swap-rotate hover:text-gray-800 transition duration-300 ease-out hover:ease-in" onClick={handleDarkMode}>
              <input type="checkbox" />
              <input type="checkbox" checked={isDarkMode} readOnly />
              <div className="swap-on">
                <svg className={`fill-current w-8 h-8 ${isDarkMode && "text-slate-50"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              </div>

              <div className="swap-off">
                <svg className="fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </div>
            </button>
            <Link href="https://github.com/Agungajipradana" target="_blank" className="tooltip tooltip-bottom" data-tip="Github">
              <Image
                src={imageGithub}
                alt={"imageGithub"}
                width={1000}
                height={500}
                className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-8 h-8 ${isDarkMode && "hover:bg-slate-200"}`}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/agungajipradana/" target="_blank" className="tooltip tooltip-bottom text-xs" data-tip="Linkedin">
              <Image
                src={imageLinkedin}
                alt={"imageLinkedin"}
                width={1000}
                height={500}
                className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-8 h-8 ${isDarkMode && "hover:bg-slate-200"}`}
              />
            </Link>
          </div>

          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className={`btn m-1 p-0 border-none ${isDarkMode ? "bg-gray-900" : "bg-slate-200"}`}>
              <label className={`btn btn-circle swap swap-rotate border-none ${isDarkMode ? "bg-gray-900" : "bg-slate-200"}`}>
                <svg className={`swap-off ${isDarkMode ? "fill-slate-200" : "fill-gray-900"}`} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              </label>
            </div>

            <ul tabIndex={0} className={` dropdown-content z-[1] menu mt-2 shadow bg-base-100 rounded-box w-52 ${isDarkMode ? "bg-gray-900 text-slate-200 " : "bg-slate-200 text-gray-900"}`}>
              {navLink.map((item) => (
                <li key={item.path}>
                  <ScrollLink to={item.path} spy={true} smooth={true} offset={-70} duration={500} className={` transition duration-300 ease-out  hover:ease-in `}>
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="dropdown dropdown-bottom dropdown-end mb-1" onMouseLeave={() => setIsOpen(false)}>
            <button className={`btn btn-ghost btn-square hover:bg-gray-800 hover:text-slate-200 hover:border-1 hover:rounded-lg duration-300 ${isDarkMode && "hover:bg-slate-300 hover:text-gray-900"}`} onClick={handleClick}>
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {isOpen && (
              <div>
                <ul tabIndex={0} className={` dropdown-content z-[1] menu mt-2 shadow bg-base-100 rounded-box w-52 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
                  {navLink.map((item) => (
                    <li key={item.path}>
                      <ScrollLink
                        to={item.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`hover:bg-gray-800 hover:text-gray-800 transition duration-300 ease-out hover:ease-in  ${isDarkMode && "hover:bg-slate-300 hover:text-gray-900 "}`}
                      >
                        {item.label}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> */
}
