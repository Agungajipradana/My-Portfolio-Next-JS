import { DarkModeContextTypeProps } from "@/types";
import { createContext, useState, ReactNode } from "react";

const DarkModeContext = createContext<DarkModeContextTypeProps | undefined>(undefined);

const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const DarkMode = DarkModeContext;
export { DarkModeContext, DarkModeContextProvider };
