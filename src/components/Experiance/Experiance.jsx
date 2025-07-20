import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Academic Projects",
      company: "College / Self-Initiated",
      duration: "2023 – 2024",
      description:
        "Built and deployed multiple frontend and full-stack projects using React, Node.js, and MongoDB as part of coursework and self-practice.",
    },
    {
      title: "Online Training Program",
      company: "Internshala / Coursera / Udemy",
      duration: "2024",
      description:
        "Completed certified Full Stack Development training covering HTML, CSS, JavaScript, React, Express.js, Node.js, and MongoDB via Internshala, Coursera, and Udemy.",
    },
    {
      title: "GitHub Projects",
      company: "Personal Work",
      duration: "Ongoing",
      description:
        "Developed projects like a Spotify clone, course-selling platform, grocery delivery app (GreenCart), and a virtual assistant — all hosted on GitHub with clean code and Git version control practices",
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-24 px-[10vw] font-sans bg-black text-white overflow-hidden"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">EXPERIENCE</h2>
        <div className="w-40 h-[3px] bg-[#8245ec] rounded-full mx-auto mt-3 mb-4"></div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Even as a fresher, I’ve built skills through hands-on learning and
          real-world projects.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-6 rounded-2xl border border-gray-700 shadow-[0_0_25px_rgba(130,69,236,0.2)] hover:shadow-[0_0_40px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-[#8245ec] mb-1">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.company}</p>
            <p className="text-gray-500 text-xs mb-4">{item.duration}</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative clip-path at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-black clip-path-custom-2"></div>
    </section>
  );
};

export default Experience;
