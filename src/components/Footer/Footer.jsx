import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialItems = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/share/19Wr8LrPDR/",
    },
    {
      icon: <FaTwitter />,
      link: "", // No link, show as disabled
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/vipul-kumar-51702929a",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/_the__jearsey__no__13",
    },
    {
      icon: <FaYoutube />,
      link: "", // No link, show as disabled
    },
  ];

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Vipul Kumar</h2>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Project", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialItems.map((item, index) =>
            item.link ? (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
              >
                {item.icon}
              </a>
            ) : (
              <span
                key={index}
                className="text-xl text-gray-500 cursor-not-allowed opacity-50"
                title="Link not available"
              >
                {item.icon}
              </span>
            )
          )}
        </div>
        {/* Copyright text */}
        <a className="text-sm text-gray-400 mt-6">
          © 2025 Vipul Kumar. All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
