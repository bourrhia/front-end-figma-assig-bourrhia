import type { NextPage } from "next";
import Header from "./header";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[81px] box-border max-w-full text-left text-49xl text-white font-monument-extended max-w-[925px]:pb-[34px] max-w-[925px]:box-border max-w-[1350px]:pb-[53px] max-w-[1350px]:box-border">
      <div className="flex-1 flex flex-col items-start justify-start pt-[30px] pb-[102px] pr-0 pl-[50px] box-border relative gap-[442px] bg-[url('/mainvideogradient-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full max-w-[925px]:gap-[110px] max-w-[925px]:pb-[43px] max-w-[925px]:box-border max-w-[1350px]:gap-[221px] max-w-[1350px]:pl-[25px] max-w-[1350px]:pt-5 max-w-[1350px]:pb-[66px] max-w-[1350px]:box-border">
        <img
          className="w-[1920px] h-[970px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/mainvideogradient-1@2x.png"
        />
        <div className="w-full h-full absolute !m-[0] top-[970px] right-[-1920px] bottom-[-970px] left-[1920px] [background:linear-gradient(174.64deg,_#000,_#3d8bff_47.14%,_#ab23ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
        <header className="self-stretch h-[83px] flex flex-row items-start justify-start gap-[45px] top-[0] z-[99] sticky max-w-full text-center text-lg text-white font-satoshi max-w-[925px]:gap-[22px]">
          <Header />
          <div className="self-stretch flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <div className="w-[5px] flex-1 relative rounded-12xs bg-purple z-[6]" />
          </div>
        </header>
        <div className="w-[1820px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1440px] flex flex-col items-start justify-start gap-[40px] max-w-full max-w-[925px]:gap-[20px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[110%] uppercase font-normal font-inherit z-[2] max-w-[925px]:text-35xl max-w-[925px]:leading-[60px] max-w-[450px]:text-22xl max-w-[450px]:leading-[45px]">
              <p className="m-0">The world's first</p>
              <p className="m-0">platform for Tokenizing</p>
              <p className="m-0">AI blockchain projects</p>
            </h1>
            <div className="box-border overflow-hidden flex flex-row items-start justify-start pt-[5px] px-0 pb-2.5 max-w-full z-[2] text-3xl font-satoshi border-t-[1px] border-solid border-blue border-b-[1px]">
              <b className="relative leading-[29px] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">
                Hold the Creon Pass NFT and earn passive income from AI Tools
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
