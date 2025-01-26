import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import HomeImg from "@/images/homeImg.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function HeroPage() {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

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
        <div className="md:text-[12vw] uppercase font-semibold lg:px-10 mt-8 text-[3.7rem] px-5 leading-none pb-2 lg:pb-0 lg:flex lg:items-center lg:gap-5 lg:justify-center">
          <div className="flex items-center gap-5 lg:gap-0">
            <h1>web</h1>
            <div className="h-1 w-full bg-white lg:hidden"></div>
          </div>
          <h1>portfolio</h1>
        </div>
      </div>
      {/* heroimg */}
      <div className="lg:px-14 px-5">
        <div className="bg-zinc-950 h-[30rem] overflow-hidden relative">
          <motion.div
            ref={ref}
            style={{ scale }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={HomeImg}
              alt="Hero Image"
              className="object-cover"
              layout="fill"
              priority
              quality={100}
            />
          </motion.div>
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
