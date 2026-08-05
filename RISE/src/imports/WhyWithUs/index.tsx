import { motion } from "motion/react";
import imgRectangle695 from "./8ff2c4d355b03351d797c7e59f6f7768e21d1b9c.png";

// ...existing code...
function Heading() {
  return (
    <motion.div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading">
      <p className="[word-break:break-word] capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[56px] relative shrink-0 text-[#1b2260] text-[48px] text-center tracking-[-1.5px] whitespace-nowrap">Our Founder</p>
    </motion.div>
  );
}

function ListWhyUs() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[50px] items-start w-full" data-name="List Why Us">
      <motion.div className="md:w-[492px] w-full h-[586px] relative rounded-[16px] shrink-0">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
          <img alt="" className="absolute h-full left-[-9.59%] max-w-none top-[0.00%] w-[119.11%] object-cover" src={imgRectangle695} />
        </div>
      </motion.div>

      <div className="w-full md:w-[688px] font-['Sora:Regular',sans-serif] font-normal text-[#132334] text-[18px] leading-[32px] whitespace-pre-wrap">
        <p className="[word-break:break-word] capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[45px] relative shrink-0 text-[#1b2260] text-[35px] text-left tracking-[-1.px] whitespace-nowrap">Pamala Burch</p>
        <p className="mb-0">Founder, RISE Financial Strategies</p>
        <p> </p>
        <p className="mb-0">{`Pamala Burch is a Licensed Retirement Specialist and Financial Strategist who founded RISE Financial Strategies to help families approach retirement with clarity instead of anxiety. Her work centers on retirement income planning, tax strategy, and legacy conversations that are too often left until it's too late.`}</p>
        <p className="mb-0">​</p>
        <p>{`Grounded in faith and driven by purpose, Pamala believes retirement planning is about more than numbers — it's about protecting the people and the legacy you've spent a lifetime building. She works personally with every client and partners with a trusted network of estate planning attorneys and specialists when your plan calls for it.`}</p>
      </div>
    </div>
  );
}

export default function WhyWithUs () {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-6 md:p-[100px]">
      <div className="w-full max-w-[1200px] flex flex-col gap-[48px] items-center">
        <Heading />
        <ListWhyUs />
      </div>
    </div>
  );
}