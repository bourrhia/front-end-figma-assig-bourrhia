import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-64 box-border max-w-full text-left text-49xl text-white font-monument-extended max-w-[925px]:pb-[108px] max-w-[925px]:box-border max-w-[1350px]:pb-[166px] max-w-[1350px]:box-border">
      <div className="w-[1440px] flex flex-col items-start justify-start gap-[83px] max-w-full max-w-[925px]:gap-[41px] max-w-[450px]:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <h1 className="m-0 relative text-inherit leading-[75px] uppercase font-normal font-inherit inline-block max-w-full max-w-[925px]:text-35xl max-w-[925px]:leading-[60px] max-w-[450px]:text-22xl max-w-[450px]:leading-[45px]">
            Profiting Through
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end text-right text-19xl">
            <h1 className="m-0 relative text-inherit leading-[46px] uppercase font-normal font-inherit text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] max-w-[925px]:text-11xl max-w-[925px]:leading-[36px] max-w-[450px]:text-4xl max-w-[450px]:leading-[27px]">{`AI Innovation & Decentralization`}</h1>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[30px] max-w-full text-3xl font-satoshi">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border min-w-[622px] max-w-full max-w-[925px]:min-w-full">
            <div className="self-stretch h-[485px] rounded-md overflow-hidden shrink-0 flex flex-row items-start justify-start bg-[url('/creon-logo-5-v01-normal-bitrate-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="self-stretch w-[947px] relative max-h-full object-cover hidden min-h-[485px] max-w-full"
                alt=""
                src="/creon-logo-5-v01-normal-bitrate-1@2x.png"
              />
              <div className="self-stretch flex-1 relative rounded-md [background:linear-gradient(174.64deg,_#3d8bff,_#ab23ff)] [transform:_rotate(-180deg)] mix-blend-soft-light max-w-full z-[1]" />
            </div>
          </div>
          <div className="h-[485px] w-px relative bg-grey-line max-w-[1350px]:w-full max-w-[1350px]:h-px" />
          <div className="w-[391px] flex flex-col items-start justify-start pt-0 px-0 pb-[107px] box-border min-h-[377px] max-w-full max-w-[450px]:pb-[70px] max-w-[450px]:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
              <b className="self-stretch relative leading-[130%] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">
                The dynamic community driven business model of the future.
              </b>
              <div className="self-stretch h-[184px] relative text-lg leading-[130%] inline-block">
                At Creon, we blend the power of AI tools with the dynamic crypto
                and NFT markets, utilizing an innovative business model to drive
                profitability. This approach empowers our community, as our NFT
                and token holders directly benefit from the growth and
                prosperity of the Creon network, creating a win-win scenario for
                both our community and for the projects we launch.
              </div>
            </div>
          </div>
          <div className="h-[485px] w-px relative bg-grey-line max-w-[1350px]:w-full max-w-[1350px]:h-px" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
