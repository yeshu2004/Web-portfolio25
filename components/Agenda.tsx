import React from 'react'

export default function Agenda() {
  return (
    <div className="h-screen w-full">
        {/* agenda */}
        <h1 className="uppercase text-sm font-semibold px-5 lg:px-14 pt-10 lg:text-center opacity-60">
          Agenda
        </h1>
        {/* agendatext */}
        <div className="px-5 lg:px-14 lg:text-center">
          <h1 className="text-opacity-65 text-3xl">
            Specializing in creating visually stunning, highly responsive, and
            <span className="text-opacity-100"> user-focused</span> front-end experiences, I combine intuitive design
            principles, cutting-edge animations, and seamless interactivity to
            deliver immersive <span>digital journeys</span> that bring ideas to life with
            precision and creativity.
          </h1>
        </div>
      </div>
  )
}
