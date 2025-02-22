/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Agenda from "@/components/Agenda"; 
import HeroPage from "@/components/HeroPage";
import Scroll from "@/components/Scroll";
import CreaterComponent from "@/components/CreaterComponent";
import Lenis from 'lenis'
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect(()=>{
    const lenis = new Lenis({
      autoRaf: true,
    })
  },[])

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white tracking-tight">
      <HeroPage />
      <Agenda/>
      <CreaterComponent />
      <Footer/>
    </div>
  );
}
