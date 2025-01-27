import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import HomeImg from "@/images/homeImg.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1.4]);

  return (
    <div className="min-h-screen w-full">
      {/* navbar */}
      <div className="flex items-center justify-between uppercase font-semibold lg:px-14 lg:pt-5 px-5 py-5 text-sm opacity-60">
        <Link href={`/`} className="lg:flex hidden">
          about me
        </Link>
        <Link href={`/`} className="">
          2025/2026
        </Link>
        <Link href={`/`} className="lg:flex hidden">
          contact me
        </Link>
        <Link href={`/`} className="lg:hidden text-2xl">
          <span>
            <IoIosMenu />
          </span>
        </Link>
      </div>
      {/* herotext */}
      <div>
        <div className="md:text-[12vw] uppercase font-semibold lg:px-10 mt-8 text-[3.8rem] px-5 leading-none pb-2 lg:pb-0 md:flex md:items-center md:gap-5 md:justify-center">
          <div className="flex items-center gap-5 lg:gap-0">
            <div className="min-w-fit h-fit overflow-hidden">
              <motion.h1 initial={{y: "200%"}} animate={{y: "0%"}} transition={{duration: 1, ease: "easeInOut"}} className="w-full">web</motion.h1>
            </div>
            <motion.div initial={{width: 0}} animate={{width: "100%"}} transition={{duration: 2, ease: "easeInOut", delay: 1.5}} className="h-1 w-full bg-white md:hidden"></motion.div>
          </div>
          <div className="min-w-fit h-fit overflow-hidden">
            <motion.h1 initial={{y: "200%"}} animate={{y: "0%"}} transition={{duration: 1, delay:0.5, ease: "easeInOut"}}>portfolio</motion.h1>
          </div>
        </div>
      </div>
      {/* heroimg */}
      <div className="lg:px-14 px-5 z-2">
        <div className="h-[30rem] = relative overflow-hidden ">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
            className="bg-zinc-950 h-full w-full top-0 left-0 absolute z-10"
          ></motion.div>
          <motion.img
            ref={ref}
            style={{ scale }}
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={HomeImg.src}
            alt="Hero Image"
            className="h-full w-full  object-cover"
          />
        </div>
      </div>

      {/* herobtm */}
      <div className="uppercase flex flex-col md:flex-row items-center justify-between lg:px-14 px-5 md:pt-5 py-10 text-sm font-semibold">
        <Link
          href={``}
          className="md:pb-0 md:border-none border-b-[1px] w-full py-[3px] border-white border-opacity-35"
        >
          Instagram
        </Link>
        <div className="flex items-center gap-10 w-full md:w-fit">
          <Link
            href={``}
            className="md:pb-0 md:border-none border-b-[1px] w-full py-[3px] border-white border-opacity-35"
          >
            Linkedin
          </Link>
          <Link href={``} className="md:flex hidden">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
}
