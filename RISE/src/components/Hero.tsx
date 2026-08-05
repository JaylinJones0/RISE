import svgPaths from "../imports/Hero/svg-avke5obcmk";
import imgLogo from "@/imports/Hero/2ea1506f6486cc3431889382d2f018b45bec8dd6.png";
import imgHero from "@/imports/Hero/051a1ede11f9102907a2188205e084d0b7887011.png";

function Logo() {
  return (
    <div className="h-[70px] relative shrink-0 w-[74px] md:h-[93px] md:w-[98px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          alt="RISE Financial Strategies"
          className="absolute h-[215.79%] left-[-52.94%] max-w-none top-[-29.89%] w-[205%]"
          src={imgLogo}
        />
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="hidden md:flex gap-[40px] items-center">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#1b2260] text-[18px] leading-[24px] whitespace-nowrap">Home</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal text-[#1b2260] text-[18px] leading-[32px] whitespace-nowrap">About</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal text-[#1b2260] text-[18px] leading-[32px] whitespace-nowrap">Services</p>
    </div>
  );
}

function NavCTA() {
  return (
    <div className="bg-[#8dc63f] rounded-[128px] border border-[#ddd]">
      <div className="flex items-center justify-center px-[20px] py-[12px]">
        <a
          className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#1b2260] text-[14px] md:text-[16px] leading-[22px] whitespace-nowrap no-underline"
          href="https://bit.ly/pamala-burch-booking"
          target="_blank"
          rel="noreferrer"
        >
          Schedule Your Consultation
        </a>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] w-full px-[24px] md:px-[60px] lg:px-[100px] py-[40px]">
      {/* Left: text */}
      <div className="flex flex-col gap-[32px] items-start w-full lg:max-w-[600px]">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <div className="bg-[#f5f6fa] rounded-[128px] px-[12px] py-[8px]">
            <p className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#1baeb4] text-[14px] md:text-[16px] leading-[22px] whitespace-nowrap">
              REPOSITION. PROTECT. BUILD.
            </p>
          </div>
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold capitalize text-[#1b2260] text-[clamp(48px,8vw,96px)] leading-[1.1] tracking-[-3px] md:tracking-[-5px]">
            rISE
          </p>
          <p className="font-['Sora:Regular',sans-serif] font-normal text-[#132334] text-[16px] leading-[24px] max-w-[520px]">
            RISE Financial Strategies helps you turn a lifetime of work into a retirement built on clarity, confidence, and faith. No guesswork involved.
          </p>
        </div>
        <div className="bg-[#8dc63f] rounded-[128px]">
          <div className="flex gap-[8px] items-center px-[20px] py-[12px]">
            <a
              className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#132334] text-[16px] leading-[22px] whitespace-nowrap no-underline"
              href="https://bit.ly/pamala-burch-booking"
              target="_blank"
              rel="noreferrer"
            >
              Schedule Your Consultation
            </a>
            <div className="shrink-0 size-[20px] overflow-clip">
              <svg className="size-full" fill="none" viewBox="0 0 16.6676 16.6619">
                <path d={svgPaths.p363da880} fill="#1B2260" stroke="#132334" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative rounded-[16px] overflow-hidden w-full max-w-[492px] h-[360px] md:h-[500px] lg:h-[605px] shrink-0">
        <img
          alt="RISE Financial Strategies"
          className="absolute h-full left-[-9.59%] max-w-none top-[0.02%] w-[119.11%] object-cover"
          src={imgHero}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="bg-[#f5f6fa] flex flex-col items-start w-full">
      {/* Nav */}
      <div className="drop-shadow-[0px_6px_15px_rgba(149,149,149,0.04)] w-full">
        <div className="flex items-center justify-between px-[24px] md:px-[60px] lg:px-[100px] py-[16px]">
          <Logo />
          <NavLinks />
          <NavCTA />
        </div>
      </div>

      {/* Hero content */}
      <div className="bg-[#f5f6fa] w-full">
        <HeroContent />
      </div>
    </div>
  );
}