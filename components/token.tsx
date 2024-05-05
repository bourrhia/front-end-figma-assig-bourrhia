import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TokenType = {
  token?: string;
  empoweringNFTHoldersAndSh?: string;
  imagePlaceholder?: string;
  launchingInTheSecondHalfO?: string;

  /** Style props */
  propLineHeight?: CSSProperties["lineHeight"];
};

const Token: NextPage<TokenType> = ({
  token,
  empoweringNFTHoldersAndSh,
  imagePlaceholder,
  launchingInTheSecondHalfO,
  propLineHeight,
}) => {
  const empoweringNFTHoldersStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="h-[659px] w-[453px] rounded-md bg-gray-200 shrink-0 flex flex-col items-start justify-start pt-[179px] px-0 pb-[54px] box-border gap-[28px] text-center text-xs text-black font-satoshi max-w-[925px]:pt-[116px] max-w-[925px]:pb-[35px] max-w-[925px]:box-border max-w-[450px]:pt-[75px] max-w-[450px]:pb-[23px] max-w-[450px]:box-border">
      <div className="mt-[-189px] self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[31px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-col items-end justify-start gap-[21px] max-w-full">
          <div className="rounded-81xl bg-white overflow-hidden flex flex-row items-start justify-start py-[3px] px-1.5 whitespace-nowrap">
            <b className="relative leading-[110%] inline-block min-w-[90px]">
              COMING SOON
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-19xl text-white font-monument-extended">
            <h1 className="m-0 self-stretch relative text-inherit leading-[46px] uppercase font-normal font-inherit mq925:text-11xl mq925:leading-[36px] max-w-[450px]:text-4xl max-w-[450px]:leading-[27px]">
              {token}
            </h1>
            <b
              className="self-stretch relative text-3xl leading-[29px] font-satoshi text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]"
              style={empoweringNFTHoldersStyle}
            >
              {empoweringNFTHoldersAndSh}
            </b>
          </div>
        </div>
      </div>
      <div className="w-[423px] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none overflow-hidden flex flex-row items-start justify-start max-w-full">
        <div className="h-[234px] flex-1 relative overflow-hidden max-w-full">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src={imagePlaceholder}
          />
          <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(174.64deg,_#3c6fff,_#9123ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-color z-[1]" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full shrink-0 text-left text-lg text-white">
        <div className="flex-1 relative leading-[130%] inline-block max-w-full">
          {launchingInTheSecondHalfO}
        </div>
      </div>
    </div>
  );
};

export default Token;
