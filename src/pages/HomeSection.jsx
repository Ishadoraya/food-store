import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import headerImg1 from "../assets/main2.jpeg";
import headerImg2 from "../assets/home-1.avif";
import headerImg3 from "../assets/Main3.jpeg";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ReviewSection from "./ReviewSection";
import ContactSection from "./ContactSection";
import FoodContainer from "../components/FoodContainer";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <>
      <div
        className="header flex items-center justify-center flex-wrap sm:mt-10 md:mt-8 gap-5b bg-[yellow]"
        id="Home"
      >
        <div className="h-[25rem]">
          <h2 className="text-[17px] font-bold text-[#f8b226e8] mb-4">
            WELCOME TO CRAVING HUT
          </h2>
          <h1 className="text-6xl font-medium leading-[75px] mb-5">
            Giving your Hunger <br /> a new Option
          </h1>
          <p className="text-[#7c7c8b] font-normal mb-14">
            Lorem ipsum dolor sit amet, consec tetur adipi scing elit. <br />
            Phasellus viverra orci sed risus tinci dunt tempor. Nulla <br />
            malesuada vestibulum nibh.
          </p>
          <Link
            to={"/Popular"}
            className="py-[14px] px-8 rounded-full bg-[#ff9900e4] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
          >
            Get Order <ArrowRightAltIcon />
          </Link>
        </div>
        <div className="h-[34rem] sm:h-[25rem] flex justify-center md:h-[34rem]">
          <div className="flex items-end justify-end z-[2]">
            <img
              className="max-w-[16rem] sm:max-w-[180px] md:max-w-[16rem]"
              src={headerImg3}
              alt=""
            />
          </div>
          <div className="flex items-center justify-center absolute">
            <img
              className="max-w-md sm:max-w-[350px] md:max-w-md"
              src={headerImg2}
              alt=""
            />
          </div>
          <div className="flex items-start justify-start ml-48 mt-[-5rem]">
            <img
              className="max-w-[14rem] sm:max-w-[180px] md:max-w-[14rem]"
              src={headerImg1}
              alt=""
            />
          </div>
        </div>
      </div>
      <FoodContainer />
      <AboutSection />
      <ServicesSection />
      <ReviewSection />
      <ContactSection />
    </>
  );
};

export default HomeSection;
