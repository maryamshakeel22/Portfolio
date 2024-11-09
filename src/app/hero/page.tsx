"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import pic from "../../../public/mypic.png";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

 const Hero = () => {
  return (
    <div>
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font text-5xl mb-5 text-[#2E86C1] font-serif font-bold ml-5 hover:uppercase hover:text-[#5DADE2]">
            <div>
              <h1 className="flex justify-center items-center">Hello,</h1>
              <Typewriter
                options={{
                  strings: ['I am Maryam Shakeel...','I am Web Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="mb-8 leading-relaxed ml-6 hidden sm:block"
             data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500">
              I am currently pursuing my studies at GIAIC, where I've developed a strong interest in web development and programming. My journey in tech has been fueled by a passion for creating innovative solutions and learning about new technologies that shape the digital world.
          </p>
          
          <div className="flex justify-center ml-26">
            <button className="inline-flex text-white bg-gray-800 border-1 py-2 px-4 focus:outline-none hover:bg-gray-600 text-lg rounded-full animate-bounce">
              <Link href="https://github.com/maryamshakeel22"> 
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-600 border-1 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full animate-bounce">
              <Link href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/">
                <FaLinkedin size={26} />
              </Link>
            </button> 
          </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5" data-aos="flip-down" data-aos-duration="2000">
        <div className="mockup-phone">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1 hover:scale-150 duration-700">
      <Image src={pic} alt='my-pic'></Image>
    </div>
  </div>
</div>
    </div>
  </div>
</section>
</div>
    );
  }
export default Hero;