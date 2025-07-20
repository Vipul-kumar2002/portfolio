import React from "react";
import { education } from "/src/constants.js";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey, from school to graduation, shaped my foundation
          in tech.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] p-6 rounded-2xl border border-gray-700 shadow-[0_0_25px_rgba(130,69,236,0.2)] hover:shadow-[0_0_40px_rgba(130,69,236,0.3)] transition-all duration-300"
          >
            <img
              src={item.img}
              alt="Institution"
              className="w-full h-40 object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#8245ec] mb-1">
              {item.Batch}
            </h3>
            <p className="text-sm text-gray-400 mb-1 font-medium">
              Grade: {item.grade}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
