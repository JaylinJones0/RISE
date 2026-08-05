import { motion } from "framer-motion";
import svgPaths from "@/imports/Services/svg-hv5faogkpj";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-[16px] p-[32px] flex flex-col justify-between min-h-[260px] md:min-h-[300px]">
      <div className="overflow-clip shrink-0 size-[64px]">{icon}</div>
      <div className="flex flex-col gap-[8px] mt-[24px]">
        <p className="capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[32px] text-[#1b2260] text-[20px] md:text-[24px] tracking-[-1.5px]">
          {title}
        </p>
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] text-[#595d7b] text-[16px]">
          {description}
        </p>
      </div>
    </div>
  );
}

const cards: CardProps[] = [
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.3333 53.3333">
        <path d={svgPaths.p127a1700} fill="#4351D6" />
      </svg>
    ),
    title: "Retirement Income Planning",
    description:
      "Strategies designed to help create dependable income throughout retirement, aligned with your timeline and risk comfort.",
  },
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.2807 47.0571">
        <path d={svgPaths.pd809980} fill="#4351D6" />
      </svg>
    ),
    title: "Tax-Aware Strategy",
    description:
      "A look at how your savings are positioned today, and ways to help manage the tax impact of your retirement income tomorrow.",
  },
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.3333 42.6635">
        <path d={svgPaths.p24b0be80} fill="#4351D6" />
      </svg>
    ),
    title: "Rollover Guidance",
    description:
      "Clear, unhurried guidance if you're changing jobs, retiring, or simply reconsidering where an old workplace account belongs.",
  },
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.3333 53.3558">
        <path d={svgPaths.p1dfe5e80} fill="#4351D6" />
      </svg>
    ),
    title: "Legacy & Estate Concepts",
    description:
      "Conversations about how you want your assets and your story to be passed on, coordinated with licensed estate planning attorneys as needed.",
  },
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.3333 53.3333">
        <path d={svgPaths.p110893f1} fill="#4351D6" />
      </svg>
    ),
    title: "Protection Planning",
    description:
      "An honest review of where your plan may be exposed, and strategies that can help protect what you've already built.",
  },
  {
    icon: (
      <svg className="size-full" fill="none" viewBox="0 0 53.3333 53.3333">
        <path d={svgPaths.p127a1700} fill="#4351D6" />
      </svg>
    ),
    title: "Ongoing Guidance",
    description:
      "Retirement isn't a single decision. We meet regularly to revisit your plan as life, markets, and goals evolve.",
  },
];

export default function Services() {
  return (
    <div className="bg-[#f5f6fa] w-full flex flex-col gap-[32px] items-center px-[24px] md:px-[60px] lg:px-[100px] py-[60px] lg:py-[100px]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[56px] text-[#1b2260] text-[clamp(32px,5vw,48px)] tracking-[-1.5px] text-center"
      >
        What we do
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <ServiceCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
