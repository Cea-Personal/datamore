export default function Hexagon({
  industry,
  activeIndustry,
  setActiveIndustry,
  top,
  left,
  hexagon
}: any) {

  const isActive = activeIndustry === industry.label
  return (

    <div
      onMouseEnter={() =>
        setActiveIndustry(industry.label)
      }
      className={`
        absolute
        w-[180px]
        h-[200px]
        cursor-pointer
        transition-all
        duration-500
        ${isActive ? 'scale-110': 'hover:scale-105'}
      `}
      style={{ top, left }}
    >

      {/* OUTER HEX BORDER */}

      <div

        className={`
          absolute
          inset-0
          transition-all
          duration-500
          ${isActive
            ? 'text-tertiary-fixed-dim'
            : 'bg-white'}
        `}
        style={{
          clipPath: hexagon,
          filter: isActive
            ? 'drop-shadow(0 0 25px rgba(244,179,33,0.45))'
            : 'drop-shadow(0 10px 25px rgba(0,0,0,0.55))',
        }}

      />

      {/* INNER DARK HEX */}

      <div
        className="absolute inset-[4px] bg-[#0B0F19]"
        style={{clipPath: hexagon,}}/>

      {/* INNER THIN BORDER */}

      <div
        className="absolute inset-[10px] border border-white/15"
        style={{clipPath: hexagon,}}

      />

      {/* ACTIVE GLOW */}

      {isActive && (
        <div
          className="absolute inset-[12px] bg-[#F4B321]/10 blur-xl"
          style={{clipPath: hexagon,}}
        />
      )}

      {/* ICON */}

      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`
            material-symbols-outlined
            relative
            z-10
            transition-all
            duration-500
            ${isActive
              ? 'text-[#FFD369] text-[72px]'
              : 'text-[#F4B321] text-[64px]'}
          `}
          style={{transform:  'scale(3.0)'}}
        >
        {industry.icon}

        </span>

      </div>

    </div>

  )

}