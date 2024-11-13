import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <div id="homepage" className="bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Name and title */}
      <p className="italic text-[#F4F4F4] text-[30px] md:text-[40px] font-extralight text-center md:text-left mb-6 px-4 md:px-0">
        My name is{" "}
        <span className="italic-none text-[#05161A] text-[60px] font-extrabold tracking-tight lg:text-5xl">
          Racheal Aber
        </span>
      </p>

      {/* "My Story" Button */}
      <Button
        variant="link"
        className="bg-[#0C7075] text-white mt-6 py-2 px-6 rounded-lg text-lg hover:bg-[#072E33] hover:scale-105 transform transition-all duration-300 ease-in-out"
      >
        My Story
      </Button>

      {/* Avatar Section */}
      <div className="mt-10 mb-8">
        <Avatar
          className="mx-auto border-8 border-[#05161A] shadow-2xl w-40 h-40 md:w-52 md:h-52 transform hover:scale-110 transition-all duration-500 ease-in-out"
        >
          <AvatarImage src="/images/Rachea.jpg" />
          <AvatarFallback>Racheal Aber's Image</AvatarFallback>
        </Avatar>
      </div>

      {/* Tagline */}
      <div className="text-center mt-8 px-4 md:px-0 ml-[150px]">
        <h2 className="text-[#05161A] text-[20px] md:text-[50px] font-semibold mb-2">
          A Work in Progress!
          <span className="italic text-white block md:inline">That is how I describe myself</span>
        </h2>
        
      </div>
    </div>
  );
};

export default HomePage;
