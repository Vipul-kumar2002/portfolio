import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Vipul Kumar
          </h2>

          {/* Typing Effect */}

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight text-white">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "Frontend + Backend = MERN Stack",
                2000,
                "Passionate About Web Development 💻",
                2000,

                "Ready to Start My Developer Journey 💻✨",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="text-[#8245ec]"
            />
          </h3>

          {/* About me  */}
          <p className="text-base sm:text-lg md:text-gray-400 mb-10 mt-8 leadiing-relaxed">
            I am a passionate and motivated MERN Stack Developer with a strong
            foundation in building full-stack web applications using MongoDB,
            Express.js, React, and Node.js. As a fresher, I’ve focused on
            learning modern web development practices and turning ideas into
            responsive, functional applications. I enjoy problem-solving,
            continuously improving my skills, and exploring new technologies.
            I'm eager to contribute to real-world projects and collaborate with
            teams where I can grow as a developer and add value through my
            creativity and code.
          </p>
          <a
            href="https://drive.google.com/file/d/1dgVS7HyzJjvZbuSMuCz9hRL1NwK0idbz/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end ">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngley={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vipul Kumar"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px-20px_rgba(130,69,236,0.5)]"
            ></img>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
