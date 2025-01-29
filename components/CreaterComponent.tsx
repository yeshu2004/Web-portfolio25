import { PiSignatureLight } from "react-icons/pi";
import { motion } from "motion/react";

export default function CreaterComponent(){
  return (
    <div className="bg-[#e6e6e6] h-screen w-full text-[#6a6a6a]">
        <div className="md:flex md:flex-row flex flex-col justify-between pt-16 px-5 lg:px-14 gap-10">
          <div className="flex items-center gap-1 md:ml-10 h-fit w-fit overflow-hidden">
            <span><PiSignatureLight className="text-xl -rotate-45"/></span>
            <h1 className="font-semibold text-sm uppercase border-b-[1px] border-[#6a6a6a]">Creator</h1>
          </div>
          <motion.div className=" lg:w-[37vw] md:w-[45vw] lg:text-[2.3vw] md:text-[3vw] text-[6.3vw] leading-[1.2] flex flex-col lg:gap-[0] gap-0">
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut"}} className="">A passionate Frontend developer</motion.h1>
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut", delay: 0.5}} className="">dedicated to transforming ideas</motion.h1>
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut", delay: 0.6}} className="">into dynamic, user-centric </motion.h1>
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut", delay: 0.7}} className="">experiences through clean code, </motion.h1>
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut", delay: 0.8}} className="">intuitive design, and innovative </motion.h1>
            <motion.h1 initial={{opacity: 0, y: 75}} viewport={{once: true}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.9,ease: "easeInOut", delay: 0.9}} className="">web technologies.</motion.h1>
          </motion.div>
        </div>
    </div>
  )
}
