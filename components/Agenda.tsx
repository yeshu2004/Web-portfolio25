import React from "react";
import { motion } from "motion/react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Image from "next/image";
import img1 from "@/images/img1.jpg";
import img2 from "@/images/img2.webp";

export default function Agenda() {
  return (
    <div className="h-full w-full">
      {/* agenda */}
      <h2 className="uppercase text-sm font-semibold px-5 lg:px-14 pt-10 md:text-center opacity-60">
        Agenda
      </h2>
      {/* agenda_text
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
      </div> */}
      {/* agenda_text */}
      <div className="lg:text-[3vw] md:text-[4vw] leading-[1.2] flex flex-col md:items-center pt-10 px-5 lg:px-14 text-[7.2vw] text-[#959596] pb-14">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className=""
        >
          Specializing in creating visually stunning, highly{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className="text flex flex-wrap items-center gap-1"
        >
          responsive, and{" "}
          <span className="flex items-center">
            <motion.h1
              initial={{ color: "#959596" }}
              whileInView={{ color: "#ffff" }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.9 }}
            >
              user-focused
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 110 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 1.3, duration: 1 }}
              className="bg-red-200 md:h-10 lg:h-14 h-8 hidden md:flex"
            >
              <Image src={img1} className="object-cover bg-center ease-in-out" alt="img" />
            </motion.div>
          </span>{" "}
          front-end{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className="text"
        >
          experiences, I combine intuitive design principles,{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className="text"
        >
          cutting-edge animations, and seamless interactivity to
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className="text flex flex-wrap items-center gap-1"
        >
          deliver immersive{" "}
          <span className="flex items-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 110 }}
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", delay: 1.3, duration: 1 }}
              className="bg-red-200 md:h-10 lg:h-14 h-8 hidden md:flex"
            >
              <Image src={img2} className="object-cover bg-center ease-in-out" alt="img" />
            </motion.div>
            <motion.h1
              initial={{ color: "#959596" }}
              whileInView={{ color: "#ffff" }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.9 }}
            >
              digital journeys
            </motion.h1>
          </span>{" "}
          that bring{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.9 },
          }}
          viewport={{ once: true }}
          className="text"
        >
          ideas to life with precision and creativity.
        </motion.h1>
      </div>
      <div className="flex items-center justify-center pb-8">
        <motion.span
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut", 
          }}
          className="lg:text-3xl text-2xl"
        >
          <RiArrowDownDoubleLine />
        </motion.span>
      </div>
    </div>
  );
}
