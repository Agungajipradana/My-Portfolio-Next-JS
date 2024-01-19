import Head from "next/head";
import Hero from "./hero";
import About from "./about";
import TechStack from "./techStack";
import Projects from "./projects";
import Contact from "./contact";
import ProgressBar from "nextjs-progressbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setLoading(false);
    };

    const timeout = setTimeout(() => handleComplete(), 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Agung Aji Pradana</title>
      </Head>
      <ProgressBar color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#1F2937",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div className="flex-col">
            <h1 className="text-slate-200 text-2xl">Loading My Portfolio</h1>
            <progress className="progress w-56 bg-slate-200"></progress>
          </div>
        </div>
      )}
      <div id="home">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
