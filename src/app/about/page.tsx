"use client";

import Image from "next/image";
import pic from "../../../public/mypic.png";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

 const About = () => {
  return (
    <>
      <section className="text-white body-font overflow-hidden">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Profile Image */}
          <div className="relative">
            <Image
              src={pic}
              alt="mypic"
              height={400}
              width={400}
              className="rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Circular Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-4xl font-sans mb-2 font-bold hover:text-blue-950 text-cyan-600  hover:uppercase">
              <span className="text-cyan-600 text-5xl hover:text-blue-900">A</span>bout Me
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-cyan-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ['Passionate Web Developer, Creating Innovative Solutions!'],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-lg relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Hello! I'm a dedicated developer passionate about crafting engaging and functional digital experiences. With skills in Next.js and TypeScript, I enjoy creating projects that combine clean code with appealing design. I'm always eager to learn new technologies and enhance my skills to stay current in the ever-evolving tech world. Whether working on frontend or backend, my goal is to build solutions that are both innovative and impactful.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="btn-grad inline-flex items-center justify-center text-white animate-bounce bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full transition-transform transform hover:scale-110 hover:shadow-lg">
                <Link href="https://resume-cv-olive.vercel.app/">
                  Resume
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;