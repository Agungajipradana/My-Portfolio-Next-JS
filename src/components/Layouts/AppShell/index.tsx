import { useRouter } from "next/router";
import { DM_Sans } from "next/font/google";
import { DarkModeContextProvider } from "@/context/DarkMode";
import { AppShellProps } from "@/types";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../Layouts/Navbar/index"));
const Footer = dynamic(() => import("../../Layouts/Footer/index"));

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const router = useRouter();
  const is404Page = router.pathname === "/404";
  return (
    <>
      <DarkModeContextProvider>
        <main className={dmSans.className}>
          {!is404Page && <Navbar />}
          {children}
          {!is404Page && <Footer />}
        </main>
      </DarkModeContextProvider>
    </>
  );
};
export default AppShell;
