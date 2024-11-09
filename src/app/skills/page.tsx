'use client';

import { useState } from 'react';
import ProgressCircular from './progresscircular';
import Typewriter from 'typewriter-effect';

function SkillsShowcase() {
  const [showAll, setShowAll] = useState(false);
  // Array of skills and their values
  const skills = [
    { name: 'HTML', value: 90 },
    { name: 'CSS', value: 85 },
    { name: 'JavaScript', value: 80 },
    { name: 'Typescript', value: 88 },
    { name: 'Tailwind CSS', value: 70 },
    { name: 'React', value: 60 },
    { name: 'Next.js', value: 75 },
    { name: 'Figma', value: 50 },
  ];

  const toggleSkillsDisplay = () => {
    setShowAll(!showAll);
  };

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section
      className="text-white body-font overflow-hidden"
    >
      <div className="container mx-auto flex py-20 items-center justify-center flex-col">
      <h1 className=" text-5xl pb-10 font-sans mb-2 font-bold hover:text-blue-950 text-cyan-600  hover:lowercase">
              <span className="text-cyan-600 text-5xl hover:text-blue-900">S</span>KILLS
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-cyan-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ['Empowering ideas with skills.'],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>          
            </div>  
      {/* Loop through skills array and render ProgressBar component */}
      <div className="hidden grid-cols-2 gap-4 mb-6 lg:grid justify-items-center md:grid-cols-4  lg:gap-8 ">
        {skills.map((skill, index) => (
          <ProgressCircular
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 lg:hidden justify-items-center lg:grid-cols-4 lg:gap-8 ">
        {displayedSkills.map((skill, index) => (
          <ProgressCircular
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </div>

      <div className={`flex justify-center mt-4 lg:hidden`}>
        <button className="btn-grad" onClick={toggleSkillsDisplay}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  );
}

export default SkillsShowcase;
