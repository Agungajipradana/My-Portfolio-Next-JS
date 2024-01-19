import iconMail from "../../assets/images/contact/mail-icon.svg";
import iconMailDarkMode from "../../assets/images/contact/mail-icon2.svg";
import iconPhone from "../../assets/images/contact/phone-icon.svg";
import iconPhoneDarkMode from "../../assets/images/contact/phone-icon2.svg";
import iconCopyToClipboard from "../../assets/images/contact/copyToClipboard.svg";
import iconCopyToClipboardDarkMode from "../../assets/images/contact/copyToClipboard2.svg";
import imageGithub from "../../assets/images/navbar/Github.svg";
import imageLinkedin from "../../assets/images/navbar/linkedin.svg";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/context/DarkMode";
import { ContactProps } from "@/types";

const Alert = ({ show, message }: ContactProps) => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div className={`fixed top-0 left-0 w-full p-4  transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"} `}>
      <div className={`alert shadow-lg ${isDarkMode ? "bg-gray-900 text-slate-50" : "bg-slate-200 text-gray-900"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">{message}</div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    return null;
  }

  const { isDarkMode } = darkModeContext;

  return (
    <div id="contact" className={`py-2 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="flex justify-center items-center text-center mt-20  lg:mt-24">
        <div className={`${isDarkMode ? "text-slate-50" : "text-slate-500"}`}>
          <h1 className="text-2xl font-semibold lg:text-3xl">Get In Touch</h1>
          <p className="text-sm mx-4 lg:text-base">What`s next? Feel free to reach out to me if you`re looking for a developer, have a query, or simply want to connect.</p>
          <div className={`${isDarkMode ? "text-slate-200" : "text-gray-800"}`}>
            <div className={`flex justify-center items-center gap-x-2 mt-5 mb-2 text-xl lg:text-2xl `}>
              <Image src={isDarkMode ? iconMailDarkMode : iconMail} alt="" className="w-6 h-6" />
              <p>agungajipradana@gmail.com</p>
              <button className="tooltip sm:text-xs" data-tip="Copy To Clipboard" onClick={() => copyToClipboard("agungajipradana@gmail.com", setCopiedEmail)}>
                <Image src={isDarkMode ? iconCopyToClipboardDarkMode : iconCopyToClipboard} alt="" className="w-5 h-5" />
              </button>
            </div>
            <div className="flex justify-center items-center gap-x-2 text-xl lg:text-2xl">
              <Image src={isDarkMode ? iconPhoneDarkMode : iconPhone} alt="" className="w-6 h-6" />
              <p>+62-82113950320</p>
              <button className="tooltip" data-tip="Copy To Clipboard" onClick={() => copyToClipboard("+62-82113950320", setCopiedPhone)}>
                <Image src={isDarkMode ? iconCopyToClipboardDarkMode : iconCopyToClipboard} alt="" className="w-5 h-5 " />
              </button>
            </div>
          </div>
          <div className="pt-6">
            <p>You may also find me on these platforms!</p>
            <div className="flex space-x-2 justify-center items-center pt-3">
              <Link href="https://github.com/Agungajipradana" target="_blank" className="tooltip tooltip-bottom" data-tip="Github">
                <Image src={imageGithub} alt="" className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-full h-full ${isDarkMode && "hover:bg-slate-200"}`} />
              </Link>
              <Link href="https://www.linkedin.com/in/agungajipradana/" target="_blank" className="tooltip tooltip-bottom" data-tip="Linkedin">
                <Image src={imageLinkedin} alt="" className={`hover:bg-gray-800 transition duration-300 ease-out hover:ease-in border-2 rounded-full py-1 px-1 w-full h-full ${isDarkMode && "hover:bg-slate-200"}`} />
              </Link>
            </div>
          </div>
        </div>
        <Alert show={copiedEmail} message="Email copied to clipboard!" />
        <Alert show={copiedPhone} message="Phone number copied to clipboard!" />
      </div>
    </div>
  );
};

export default Contact;
