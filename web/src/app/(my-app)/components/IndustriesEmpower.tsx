'use client'

import { useState } from 'react'
import Hexagon from './Hexagon'

interface Industry {
  label: string
  icon: string
  description: string
}

interface IndustriesEmpowerData {
  title: string
  subtitle: string
  industries: Industry[]
}

export default function IndustriesEmpower({
  data,
}: {
  data: IndustriesEmpowerData
}) {
  const [activeIndustry, setActiveIndustry] = useState(
    data.industries[0]?.label || ''
  )

  const hexagon =
    'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)'

  return (
    <section className="relative bg-surface-container-low py-24">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-headline-lg mb-5 text-primary ">
            {data.title}
          </h2>
          <p className="text-body-lg  text-left mb-10">
            {data.subtitle}
          </p>
        </div>

        {/* MAIN LAYOUT */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-24">
          <div className="relative w-[540px] h-[760px] hidden lg:block">
            {data.industries?.map((industry, index) => {

              const top = index * 100
              const left = index % 2 === 0 ? 0 : 160
              return (
              <Hexagon
                key={index}
                industry={industry}
                activeIndustry={activeIndustry}
                setActiveIndustry={setActiveIndustry}
                hexagon={hexagon}
                top={top}
                left={left}
              />)
          })}
          </div>


          <div className="w-full max-w-[700px] mt-10">

            {data.industries.map((industry, index) => {
              const isActive = activeIndustry === industry.label
              return (
                <div
                  key={industry.label}
                  onMouseEnter={() =>
                    setActiveIndustry(industry.label)
                  }
                  className={`
                    group
                    relative
                    pl-10
                    mb-2
                    transition-all
                    duration-500
                    cursor-pointer
                    ${isActive
                      ? 'opacity-100 translate-x-3'
                      : 'opacity-45'}
                  `}
                >

                  {/* CONNECTOR DOT */}

                  <div
                    className={`
                      absolute
                      left-0
                      top-4
                      w-3
                      h-3
                      rounded-full
                      transition-all
                      duration-500
                      ${isActive
                        ? 'bg-[#F4B321] shadow-[0_0_20px_rgba(244,179,33,0.8)]'
                        : 'bg-gray-600'}
                    `}
                  />

                  {/* DASHED LINE */}

                  <div className="absolute top-[20px] left-[-200px] w-[180px] border-t-[3px] border-dashed border-gray-600"    />

                  {/* TITLE */}

                  <h3
                    className={`
                      font-bold
                      tracking-wide
                      transition-all
                      duration-500

                      ${isActive
                        ? 'text-[#F4B321] text-[42px]'
                        : 'text-gray-300 text-[34px]'}
                    `}
                  >
                    {industry.label}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      mt-2
                      leading-8
                      transition-all
                      duration-500
                      max-w-[620px]

                      ${isActive
                        ? 'text-white text-[18px]'
                        : 'text-gray-500 text-[17px]'}
                    `}
                  >
                    {industry.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
