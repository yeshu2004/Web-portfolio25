import Link from "next/link"

export default function HeroPage() {
  return (
    <div className="h-screen w-full">
      {/* navbar */}
      <div className="flex items-center justify-between uppercase font-semibold lg:px-14 lg:pt-5 px-5 py-5 text-sm">
          <Link href={`/`} className="lg:flex hidden">about me</Link>
          <Link href={`/`}>2025/2026</Link>
          <Link href={`/`} className="lg:flex hidden">contact me</Link>
          <Link href={`/`} className="lg:hidden"></Link>
      </div>
      {/* herotext */}
      <div>
        <h1 className="md:text-[12vw] uppercase font-semibold lg:px-10 mt-14 lg:text-center text-[3.5rem] px-5 leading-none pb-2 lg:pb-0">web portfolio</h1>
      </div>
      {/* heroimg */}
      <div className="lg:px-14 px-5">
        <div className="bg-red-200 h-[25rem]">
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      {/* herobtm */}
      <div className="uppercase flex flex-col md:flex-row items-center justify-between lg:px-14 px-5 md:pt-5 pt-10 text-sm font-semibold">
        <Link href={``} className="md:pb-0 md:border-none border-b-[1px] w-full py-[3px] border-white border-opacity-35">Instagram</Link>
        <div className="flex items-center gap-10 w-full md:w-fit">
          <Link href={``} className="md:pb-0 md:border-none border-b-[1px] w-full py-[3px] border-white border-opacity-35">Linkedin</Link>
          <Link href={``} className="md:flex hidden">Github</Link>
        </div>
      </div>
    </div>
  )
}
