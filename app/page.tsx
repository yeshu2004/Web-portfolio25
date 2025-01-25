'use client'

import Agenda from "@/components/Agenda";
import HeroPage from "@/components/HeroPage";
import Scroll from "@/components/Scroll";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  },[])

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white tracking-tight">
      <HeroPage />
      {/* <Agenda/> */}
      <Scroll />
    </div>
  );
}
