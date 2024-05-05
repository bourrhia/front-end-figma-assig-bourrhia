import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ComponentType = {
  aIProspectsMarketSizeAndD?: string;
  theAIMarketIsOneOfTheMost?: string;
  aiCloudConceptWithRobotHe?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
};

const Component: NextPage<ComponentType> = ({
  aIProspectsMarketSizeAndD,
  theAIMarketIsOneOfTheMost,
  aiCloudConceptWithRobotHe,
  propLineHeight,
}) => {
  const aIProspectsMarketStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="w-[1440px] rounded-md bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-0 pl-10 box-border gap-[40px] max-w-full text-left text-19xl text-white font-monument-extended max-w-[925px]:gap-[20px] max-w-[1350px]:flex-wrap max-w-[1350px]:pl-5 max-w-[1350px]:pr-5 max-w-[1350px]:pb-5 max-w-[1350px]:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[590px] max-w-full max-w-[925px]:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
          <h1
            className="m-0 self-stretch relative text-inherit leading-[120%] uppercase font-normal font-inherit max-w-[925px]:text-11xl max-w-[925px]:leading-[36px] max-w-[450px]:text-4xl max-w-[450px]:leading-[27px]"
            style={aIProspectsMarketStyle}
          >
            {aIProspectsMarketSizeAndD}
          </h1>
          <div className="self-stretch relative text-lg leading-[130%] font-satoshi">
            {theAIMarketIsOneOfTheMost}
          </div>
        </div>
      </div>
      <div className="h-[302px] w-[453px] relative overflow-hidden shrink-0 min-w-[453px] max-w-full max-w-[925px]:min-w-full max-w-[1350px]:flex-1">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover mix-blend-luminosity"
          loading="lazy"
          alt=""
          src={aiCloudConceptWithRobotHe}
        />
        <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(174.64deg,_#3c6fff,_#9123ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-overlay z-[1]" />
      </div>
    </div>
  );
};

export default Component;
