'use client'

import Link from 'next/link';
import { useState } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { ImCross } from "react-icons/im";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  function setIsOpen(_arg0: boolean): void {
    // throw new Error('Function not implemented.');
  }

  return (
    <div>
      <nav className="w-full bg-blue-950 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold "><span className='text-white'>M</span>S</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross onClick={() => setIsOpen(!close)} className="cursor-pointer text-white text-2xl" />
                  ) : (
                    <IoMenuOutline onClick={() => setIsOpen(!open)} className="cursor-pointer text-white text-2xl border-none" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen font-medium md:h-auto items-center justify-center md:flex animate-pulse ">
              <li className="pb-6 text-2xl text-white py-6 px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 hover:uppercase hover:underline md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 hover:uppercase hover:underline md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 hover:uppercase hover:underline md:hover:bg-transparent">
                  <Link href="/skills" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 hover:uppercase hover:underline md:hover:bg-transparent">
                  <Link href="/projects" onClick={() => setNavbar(!navbar)}>
                    Project
                  </Link>
                </li>
                <li className="pb-6 text-2xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-cyan-900  md:hover:text-cyan-600 hover:uppercase hover:underline md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;