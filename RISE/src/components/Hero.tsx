import svgPaths from "../imports/Hero/svg-avke5obcmk";
import imgLogo from "@/imports/Hero/2ea1506f6486cc3431889382d2f018b45bec8dd6.png";
import imgHero from "@/imports/Hero/051a1ede11f9102907a2188205e084d0b7887011.png";
import { IoCall } from "react-icons/io5";

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
      {/* <p className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#1b2260] text-[18px] leading-[24px] whitespace-nowrap">Home</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal text-[#1b2260] text-[18px] leading-[32px] whitespace-nowrap">About</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal text-[#1b2260] text-[18px] leading-[32px] whitespace-nowrap">Services</p> */}
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
    <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-[48px] px-[24px] py-[40px] md:gap-[56px] md:px-[60px] lg:flex-row lg:gap-[72px] lg:px-[100px] lg:py-[56px]">
      {/* Left: text */}
      <div className="flex w-full flex-col items-start gap-[40px] lg:max-w-[600px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <div className="rounded-[128px] bg-[#f5f6fa] px-[12px] py-[8px]">
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
        <div className="rounded-[128px] bg-[#8dc63f]">
          <div className="flex items-center gap-[8px] px-[20px] py-[12px]">
            <a
              className="font-['Sora:SemiBold',sans-serif] font-semibold text-[#132334] text-[16px] leading-[22px] whitespace-nowrap no-underline"
              href="https://bit.ly/pamala-burch-booking"
              target="_blank"
              rel="noreferrer"
            >
              Schedule Your Consultation
            </a>
            <div className="size-[19px] shrink-0 overflow-clip">
              <IoCall className="size-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative h-[360px] w-full max-w-[492px] shrink-0 overflow-hidden rounded-[16px] md:h-[500px] lg:h-[605px]">
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
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-[24px] px-[24px] py-[16px] md:px-[60px] lg:px-[100px]">
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