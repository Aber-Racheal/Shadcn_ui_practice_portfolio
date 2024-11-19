import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <div
      id="homepage"
      className="bg-gradient-to-r from-[#0F968C] via-[#6DA5C0] to-[#294D61] w-full h-screen flex flex-col items-center justify-center overflow-hidden text-white px-8 md:px-12 lg:px-24 py-12 md:py-16"
    >
      {/* Name and title */}
      <p className="italic text-[#F4F4F4] text-[32px] md:text-[44px] lg:text-[50px] font-extralight text-center mb-8 md:mb-10">
        My name is{" "}
        <span className="italic-none text-[#05161A] text-[64px] md:text-[80px] lg:text-[90px] font-extrabold tracking-tight leading-tight">
          Racheal Aber
        </span>
      </p>

      {/* "My Story" Button */}
      <Button
        variant="link"
        className="bg-[#0C7075] text-white mt-6 py-3 px-8 rounded-lg text-lg md:text-xl hover:bg-[#072E33] hover:scale-110 transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl"
      >
        My Story
      </Button>

      {/* Avatar Section */}
      <div className="mt-12 mb-8 transform transition-all duration-500 ease-in-out">
        <Avatar
          className="mx-auto border-8 border-[#05161A] shadow-xl w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 transform hover:scale-125 transition-all duration-500 ease-in-out hover:shadow-2xl"
        >
          <AvatarImage src="/images/Rachea.jpg" />
          <AvatarFallback>Racheal Aber's Image</AvatarFallback>
        </Avatar>
      </div>

      {/* Tagline */}
      <div className="text-center mt-10 md:mt-14 lg:mt-16 px-4 md:px-0">
        <h2 className="text-[#05161A] text-[28px] md:text-[50px] lg:text-[60px] font-semibold mb-4 md:mb-6 leading-tight tracking-tight">
          A Work in Progress!
          <span className="italic text-white block md:inline mt-2 md:mt-0">
            That is how I describe myself
          </span>
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
