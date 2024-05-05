import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="flex-1 overflow-hidden flex flex-row items-end justify-between pt-[15px] px-60 pb-[35px] box-border max-w-full gap-[20px] z-[3] text-left text-base text-white font-satoshi max-w-[925px]:pl-[60px] max-w-[925px]:pr-[60px] max-w-[925px]:box-border max-w-[1350px]:flex-wrap max-w-[1350px]:pl-[120px] max-w-[1350px]:pr-[120px] max-w-[1350px]:box-border">
      <div className="w-[453px] flex flex-row items-start justify-start gap-[89px] max-w-full max-w-[925px]:flex-wrap max-w-[450px]:gap-[44px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[157px]">
          <div className="relative leading-[21px]">
            © Creon 2023. All rights reserved.
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-[34px] w-[34px] relative min-h-[34px]"
            loading="lazy"
            alt=""
            src="/telegram.svg"
          />
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            loading="lazy"
            alt=""
            src="/discord.svg"
          />
          <img
            className="h-[34px] w-[34px] relative overflow-hidden shrink-0 min-h-[34px]"
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
        </div>
      </div>
      <div className="w-[190px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <div className="relative leading-[21px] inline-block min-w-[83px]">
            Powered by
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="self-stretch h-[18px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/frame-692.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
