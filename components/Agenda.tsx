import React from "react";
import { motion } from "motion/react";

export default function Agenda() {
  return (
    <div className="h-screen w-full">
      {/* agenda */}
      <h1 className="uppercase text-sm font-semibold px-5 lg:px-14 pt-10 md:text-center opacity-60">
        Agenda
      </h1>
      <div className="lg:text-[3vw] md:text-[4vw] leading-[1.2] flex flex-col md:items-center pt-10 px-5 lg:px-14 text-[7.2vw] text-[#959596]">
        <h1>Specializing in creating visually stunning, highly </h1>
        <h1 className="flex flex-wrap items-center gap-1">
          responsive, and{" "}
          <span className="flex items-center">
            <motion.h1 initial={{color: '#959596'}}  whileInView={{color: "#ffff"}} transition={{delay: 0.5, duration: 0.9}}>user-focused</motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 110, }}
              transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
              className="bg-red-200 md:h-10 lg:h-14 h-8 hidden md:flex"
            ></motion.div>
          </span>{" "}
          front-end{" "}
        </h1>
        <h1>experiences, I combine intuitive design principles, </h1>
        <h1>cutting-edge animations, and seamless interactivity to</h1>
        <h1 className="flex flex-wrap items-center gap-1">
          deliver immersive{" "}
          <span className="flex items-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 110 }}
              transition={{ ease: "easeInOut", delay: 0.5, duration: 1 }}
              className="bg-red-200 md:h-10 lg:h-14 h-8 hidden md:flex"
            ></motion.div>
            <motion.h1 initial={{color: '#959596'}} whileInView={{color: "#ffff"}} transition={{delay: 0.5, duration: 0.9}}>digital journeys</motion.h1>
          </span>{" "}
          that bring{" "}
        </h1>
        <h1>ideas to life with precision and creativity.</h1>
      </div>
    </div>
  );
}
