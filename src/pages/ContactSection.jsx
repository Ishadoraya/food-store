import React from "react";
import contactImg from "../assets/in touch.avif";

const ContactSection = () => {
  return (
    <div
      className="flex items-center justify-center flex-wrap py-[5rem] gap-12"
      id="Contact"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <h2 className="text-[17px] font-bold text-[#FF9800]">CONTACT</h2>
        <h1 className="text-5xl font-medium">Get In Touch With Us.</h1>
        <p className="text-[#878794] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci <br /> sed risus tincidunt tempor. Nulla malesuada
          vestibulum nibh.
        </p>
        <img
          className="w-[450px] h-[280px] rounded-2xl mt-5"
          src={contactImg}
          alt=""
        />
      </div>
      <div className="p-12 shadow-xl rounded-xl">
        <form className="flex flex-col justify-center gap-5">
          <span className="flex gap-5">
            <label>
              <span className="block text-sm font-medium text-slate-700">
                First Name
              </span>
              <input
                type="text"
                placeholder="Enter your first name..."
                className="mt-1 px-[38px] py-[14px] bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
              />
            </label>
            <label>
              <span className="block text-sm font-medium text-slate-700">
                Last Name
              </span>
              <input
                type="text"
                placeholder="Enter your last name..."
                className="mt-1 px-[38px] py-[14px] bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
              />
            </label>
          </span>
          <label>
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              placeholder="Enter your email..."
              className="mt-1 pl-9 pr-80 py-[14px] bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
            />
          </label>
          <label>
            <span className="block text-sm font-medium text-slate-700">
              Message
            </span>
            <textarea
              type="email"
              placeholder="Enter your message..."
              className="mt-1 pl-9 pr-[340px] pb-[30px] pt-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
            />
          </label>
          <button className="py-[12px] px-7 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 transition duration-500 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
