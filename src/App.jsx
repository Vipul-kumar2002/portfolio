import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experiance from "./components/Experiance/Experiance";
import Eductaion from "./components/Eductaion/Eductaion";
import BlurBlob from "./BlurBlob";
const App = () => {
  return (
    <>
      <div className="bg-[#050414]">
        <BlurBlob
          position={{ top: "35%", left: "20%" }}
          size={{ width: "30%", height: "40%" }}
        ></BlurBlob>

        <div
          className=" absolute inset-0 z-0 pointer-events-none
    bg-[length:14px_24px]
    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_70%,transparent_100%)]
    [mask-repeat:no-repeat]"
        ></div>
        <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experiance />
          <Project />
          <Eductaion />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
