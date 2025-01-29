

export default function Footer() {
  return (
    <div className="h-[100vh] w-full text-[#959596] bg-zinc-950 ">
        {/* letsconnect */}
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-start w-full md:justify-between md:px-14 px-5 pb-20 pt-10">
            <h1 className="lg:text-xl border-b-[1px] border-[#959596] ">Let&apos;s connnect</h1>
            <div className="lg:w-1/2 md:w-[45vw] lg:text-[2.2vw] md:text-[3vw] text-[6.3vw] leading-[1.2] flex flex-col lg:gap-[0] gap-0">
                <h1>Looking to collaborate or discuss a project? </h1>
                <h1>Schedule an appointment and let&apos;s bring your</h1>
                <h1>ideas to life</h1>
            </div>
        </div>
        <div className="h-[2px] w-full lg:px-14 px-5 relative">
            <div className="h-full w-full bg-[#959596]"></div>
            <div className="md:h-20 h-16 md:w-20 w-16 bg-[#959596] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-zinc-800 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-3xl font-semibold">W.</h1>
            </div>
        </div>
    </div>
  )
}
