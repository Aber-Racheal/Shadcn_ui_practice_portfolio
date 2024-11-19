'use client'

import { FaReact, FaPython, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5'; // IoLogoNodejs for Next.js
import { SiDjango } from 'react-icons/si'; // Option for Django logo from 'react-icons'

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative w-full min-h-screen text-white py-24 bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] animate-pulse opacity-30"></div>
      <div className="container mx-auto px-6 z-10 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            What I Do as a Full Stack Developer
          </h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            I specialize in both frontend and backend development. Here's a glimpse of my tech stack, tools, and workflow.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend Stack */}
          <div className="group bg-[#1D2B36] p-8 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#2D4F64]">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#0F968C] transition-colors duration-300">
              Frontend Development
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaReact className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                React.js
              </li>
              <li className="flex items-center">
                <FaCss3Alt className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <FaNodeJs className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                ShadCN/UI
              </li>
              <li className="flex items-center text-xl">
                <IoLogoNodejs className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                Next.js
              </li>
            </ul>
          </div>

          {/* Backend Stack */}
          <div className="group bg-[#1D2B36] p-8 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#2D4F64]">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#0F968C] transition-colors duration-300">
              Backend Development
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <FaPython className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                Python
              </li>
              <li className="flex items-center">
                <SiDjango className="mr-3 text-3xl group-hover:text-[#0F968C] transition-colors duration-300" />
                Django
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="group bg-[#1D2B36] p-8 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#2D4F64]">
            <h3 className="text-2xl font-semibold mb-6 group-hover:text-[#0F968C] transition-colors duration-300">
              My Workflow
            </h3>
            <p className="text-lg">
              I create seamless user experiences with powerful backend functionality. My focus is on building scalable, efficient, and maintainable applications using the best tools for the job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
