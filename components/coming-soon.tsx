import type { NextPage } from "next";
import Token from "./token";


const ComingSoon: NextPage = () => {
  return (
    <div className="w-[1920px] overflow-x-auto flex flex-row items-start justify-start pt-[156px] px-60 pb-[155px] box-border gap-[40px] max-w-full text-center text-xs text-black font-satoshi max-w-[925px]:gap-[20px] max-w-[925px]:py-[66px] max-w-[925px]:px-[60px] max-w-[925px]:box-border max-w-[1350px]:py-[101px] max-w-[1350px]:px-[120px] max-w-[1350px]:box-border">
      <Token
        token="token"
        empoweringNFTHoldersAndSh="The Gateway token to the world of AI"
        imagePlaceholder="/0-1-1@2x.png"
        launchingInTheSecondHalfO="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
      />
      <Token
        token="revenue"
        empoweringNFTHoldersAndSh="Driving income and growth through decentralization"
        imagePlaceholder="/0-1-1-1@2x.png"
        launchingInTheSecondHalfO="CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
        propLineHeight="130%"
      />
      <div className="h-[659px] w-[453px] rounded-md bg-gray-200 shrink-0 flex flex-col items-end justify-start pt-[179px] pb-[30px] pr-[30px] pl-0 box-border gap-[59px] max-w-[925px]:pt-[116px] max-w-[925px]:pb-5 max-w-[925px]:box-border max-w-[450px]:pt-[75px] max-w-[450px]:box-border">
        <div className="mt-[-189px] w-[393px] flex flex-col items-end justify-start gap-[21px] max-w-full shrink-0">
          <div className="rounded-81xl bg-white overflow-hidden flex flex-row items-start justify-start py-[3px] px-1.5 whitespace-nowrap">
            <b className="relative leading-[110%] inline-block min-w-[90px]">
              COMING SOON
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-left text-19xl text-white font-monument-extended">
            <h1 className="m-0 self-stretch relative text-inherit leading-[46px] uppercase font-normal font-inherit max-w-[925px]:text-11xl max-w-[925px]:leading-[36px] max-w-[450px]:text-4xl max-w-[450px]:leading-[27px]">
              launchpad
            </h1>
            <b className="self-stretch relative text-3xl leading-[29px] font-satoshi text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">
              Driving the future of AI Innovation
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[28px] max-w-full shrink-0 text-left text-lg text-white">
          <div className="self-stretch rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="h-[234px] flex-1 relative overflow-hidden max-w-full">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/0-1-1-2@2x.png"
              />
              <div className="absolute h-full w-full top-[100%] right-[-100%] bottom-[-100%] left-[100%] [background:linear-gradient(174.64deg,_#3c6fff,_#9123ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-color z-[1]" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[30px] box-border max-w-full">
            <div className="flex-1 relative leading-[130%] inline-block max-w-full">
              The Creon AI Launchpad, an essential component of our initiative,
              represents a groundbreaking opportunity in the realm of AI and
              blockchain. It provides the first known platform for acquiring
              allocations in tokenized AI projects, offering our community of
              NFT and CREON token holders early access to innovative and
              promising AI endeavors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
