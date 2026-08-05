import { useState } from "react";

const plusPath =
  "M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What does retirement income planning actually involve?",
    answer:
      "It starts with understanding where your income will come from once you stop working — Social Security, pensions, savings, investments — and making sure those sources work together in a sequence that lasts. We look at timing, withdrawal strategy, and what happens if one piece changes.",
  },
  {
    question: "What's the biggest mistake people make with a 401(k) rollover?",
    answer:
      "Moving too fast without understanding tax consequences. A rollover done incorrectly can trigger taxes and penalties that take years to recover from. We walk through every option carefully so you keep what you've earned.",
  },
  {
    question: "How does a retirement plan account for taxes?",
    answer:
      "We look at where your money is sitting — pre-tax, Roth, taxable — and create a strategy for drawing it down in a way that helps manage your tax bracket in retirement. Small decisions now can make a meaningful difference in what you keep later.",
  },
  {
    question: "Why should estate planning be part of a retirement conversation?",
    answer:
      "Because retirement is about more than you — it's also about what happens to the people and things you care about. We bring in licensed estate planning attorneys when your plan calls for it, so those conversations happen before they're urgent.",
  },
  {
    question: "What is a Trust, and do I need one?",
    answer:
      "A trust is a legal arrangement that controls how your assets are managed and transferred. Whether you need one depends on your situation — family structure, asset types, privacy goals. We'll help you understand the options and connect you with the right specialists.",
  },
  {
    question: "How do I know if my current plan is enough?",
    answer:
      "That's exactly what a consultation is for. We review what you have, where you're headed, and where the gaps are. Most people are surprised by what a second set of eyes uncovers — both concerns and opportunities.",
  },
];

function FaqCard({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  return (
    <button
      className="bg-white border border-[#ddd] rounded-[16px] w-full text-left transition-shadow hover:shadow-sm"
      onClick={onToggle}
    >
      <div className="flex gap-[32px] items-center p-[24px]">
        <p className="flex-1 font-['Sora:SemiBold',sans-serif] font-semibold leading-[24px] text-[#1e2456] text-[16px] md:text-[18px]">
          {item.question}
        </p>
        <div className="bg-white border border-[#ddd] flex items-center justify-center p-[12px] rounded-full shrink-0 transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
            <path d={plusPath} fill="#595D7B" />
          </svg>
        </div>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] text-[#595d7b] text-[15px] md:text-[16px] px-[24px] pb-[24px]">
          {item.answer}
        </p>
      </div>
    </button>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3);

  return (
    <div className="bg-[#f5f6fa] w-full flex flex-col gap-[40px] items-center px-[24px] md:px-[60px] lg:px-[100px] py-[60px] lg:py-[100px]">
      <p className="capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[56px] text-[#1b2260] text-[clamp(32px,5vw,48px)] tracking-[-1.5px] text-center">
        Common Questions
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px] w-full">
        <div className="flex flex-col gap-[16px]">
          {col1.map((item, i) => (
            <FaqCard key={i} item={item} open={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
        <div className="flex flex-col gap-[16px]">
          {col2.map((item, i) => (
            <FaqCard key={i + 3} item={item} open={openIndex === i + 3} onToggle={() => toggle(i + 3)} />
          ))}
        </div>
      </div>
    </div>
  );
}
