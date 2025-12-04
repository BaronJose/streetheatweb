interface PhoneMockupProps {
  imageSrc: string
  alt?: string
}

function PhoneMockup({ imageSrc, alt = "App screenshot" }: PhoneMockupProps) {
  return (
    <div className="relative w-full max-w-[300px] mx-auto drop-shadow-2xl">
      {/* Phone Frame */}
      <div className="relative rounded-[3rem] bg-black p-2 shadow-2xl border-4 border-black">
        {/* Screen Bezel */}
        <div className="rounded-[2.5rem] overflow-hidden bg-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
          {/* Screen Content */}
          <div className="relative">
            <img
              src={imageSrc}
              alt={alt}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhoneMockup

