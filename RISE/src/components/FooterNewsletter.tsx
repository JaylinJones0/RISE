import svgPaths from "@/imports/FooterNewsletter/svg-5equmreevf";
import imgLogo from "@/imports/FooterNewsletter/2ea1506f6486cc3431889382d2f018b45bec8dd6.png";

function Newsletter() {
  return (
    <div className="bg-[#132334] rounded-[16px] w-full p-[32px] flex flex-col sm:flex-row gap-[24px] items-start sm:items-end justify-between">
      <div className="flex flex-col gap-[8px]">
        <p className="capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[1.25] text-[#8dc63f] text-[clamp(22px,3vw,32px)] tracking-[-1.5px]">
          Your retirement deserves a real conversation.
        </p>
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] text-white text-[16px]">
          Schedule a complimentary, no-pressure consultation with Pamala<br className="hidden sm:block" />
          {" "}to talk through your goals and see where your plan stands today.
        </p>
      </div>
      <div className="bg-[#8dc63f] rounded-[128px] shrink-0">
        <div className="flex gap-[8px] items-center px-[20px] py-[12px]">
          <a
            className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[22px] text-[#1b2260] text-[16px] whitespace-nowrap no-underline"
            href="https://bit.ly/pamala-burch-booking"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Your Consultation
          </a>
          <div className="overflow-clip shrink-0 size-[20px]">
            <svg className="size-full" fill="none" viewBox="0 0 16.6676 16.6619">
              <path d={svgPaths.p363da880} fill="#171717" stroke="#1B2260" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ children }: { children: React.ReactNode }) {
  return <div className="shrink-0">{children}</div>;
}

function FooterInfo() {
  return (
    <div className="flex flex-col gap-[32px] w-full">
      {/* Logo + social row */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-[32px]">
        {/* Logo + tagline */}
        <div className="flex flex-col gap-[12px] max-w-[417px]">
          <div className="flex items-center gap-[8px]">
            <div className="h-[71px] relative shrink-0 w-[74px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt="RISE logo"
                  className="absolute h-[215.79%] left-[-52.94%] max-w-none top-[-29.89%] w-[205%]"
                  src={imgLogo}
                />
              </div>
            </div>
            <p className="capitalize font-['Sora:SemiBold',sans-serif] font-semibold leading-[56px] text-[#132334] text-[48px] tracking-[-1.5px]">
              RISE
            </p>
          </div>
          <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] text-[#595d7b] text-[16px]">
            Personalized retirement, tax, and legacy strategy led by Pamala Burch. Built on clarity, care, and faith.
          </p>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-[24px]">
          <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[22px] text-[#1b2260] text-[16px]">
            Join us on Social Media
          </p>
          <div className="flex gap-[12px] items-center">
            {/* Instagram */}
            <SocialIcon>
              <div className="h-[36px] overflow-clip relative shrink-0 w-[37px]">
                <div className="absolute inset-[0_0.06%_0.02%_0]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="35.993" preserveAspectRatio="none" viewBox="0 0 36.9783 35.993" width="36.9783">
                    <path d={svgPaths.p9723400} fill="#000100" />
                  </svg>
                </div>
                <div className="absolute inset-[24.32%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="18.4922" preserveAspectRatio="none" viewBox="0 0 19.0059 18.4922" width="19.0059">
                    <path d={svgPaths.p18606400} fill="#000100" />
                  </svg>
                </div>
                <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="4.31719" preserveAspectRatio="none" viewBox="0 0 4.43711 4.31719" width="4.43711">
                    <path d={svgPaths.p2b3cb800} fill="#000100" />
                  </svg>
                </div>
              </div>
            </SocialIcon>
            {/* Facebook */}
            <SocialIcon>
              <div className="h-[26px] overflow-clip relative shrink-0 w-[28px]">
                <div className="absolute inset-[0_0_0.37%_0]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="25.9048" preserveAspectRatio="none" viewBox="0 0 28.0006 25.9048" width="28.0006">
                    <path d={svgPaths.p390bed40} fill="#132334" />
                  </svg>
                </div>
                <div className="absolute inset-[18.51%_26.8%_0_27.61%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="21.1874" preserveAspectRatio="none" viewBox="0 0 12.7652 21.1874" width="12.7652">
                    <path d={svgPaths.p28e00240} fill="white" />
                  </svg>
                </div>
              </div>
            </SocialIcon>
            {/* TikTok */}
            <SocialIcon>
              <div className="relative shrink-0 size-[26px]">
                <div className="absolute inset-[4%_5.61%_0_19.67%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="24.96" preserveAspectRatio="none" viewBox="0 0 19.4269 24.96" width="19.4269">
                    <path d={svgPaths.p24b94b00} fill="#132334" fillOpacity="0.5" />
                  </svg>
                </div>
                <div className="absolute inset-[4%_10.41%_4%_11.04%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="23.92" preserveAspectRatio="none" viewBox="0 0 20.4237 23.92" width="20.4237">
                    <path d={svgPaths.p102de100} fill="#132334" />
                  </svg>
                </div>
                <div className="absolute inset-[0_10.41%_9.14%_6.25%]">
                  <svg className="absolute block inset-0 size-full" fill="none" height="23.6242" preserveAspectRatio="none" viewBox="0 0 21.6694 23.6242" width="21.6694">
                    <path d={svgPaths.p21dab800} fill="#132334" />
                  </svg>
                </div>
              </div>
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* Divider + copyright */}
      <div className="border-t border-[#ddd] pt-[24px] flex flex-col gap-[12px]">
        <p className="font-['Sora:Regular',sans-serif] font-normal leading-[20px] text-[#595d7b] text-[14px] opacity-50 text-center">
          © 2026 RISE Financial Strategies. All rights reserved.
        </p>
        <div className="font-['Sora:Regular',sans-serif] font-normal leading-[20px] text-[#595d7b] text-[14px] opacity-50 flex flex-col gap-[12px]">
          <p>RISE Financial Strategies provides retirement, tax-aware, and legacy planning guidance. Pamala Burch is a licensed retirement specialist; specific product and licensing details are available upon request and vary by state. Nothing on this site is individualized financial, tax, or legal advice — recommendations are made only after a personal consultation and are tailored to your specific circumstances.</p>
          <p>RISE Financial Strategies is not a law firm or CPA firm. Estate planning documents are prepared by, and legal or tax advice is provided by, independent licensed attorneys and tax professionals; RISE facilitates introductions but does not provide legal or tax services directly.</p>
          <p>Any strategies discussed involve trade-offs and are not guaranteed to achieve a specific outcome. Past results and general education do not guarantee future performance. Please consult a licensed professional before making any financial decision.</p>
        </div>
      </div>
    </div>
  );
}

export default function FooterNewsletter() {
  return (
    <div className="bg-white w-full flex flex-col gap-[48px] px-[24px] md:px-[60px] lg:px-[100px] py-[48px]">
      <Newsletter />
      <FooterInfo />
    </div>
  );
}
