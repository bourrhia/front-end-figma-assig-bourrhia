import type { NextPage } from "next";
import Advantage from "./advantage";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[51px] box-border max-w-full text-left text-19xl text-white font-monument-extended max-w-[925px]:pb-[33px] max-w-[925px]:box-border max-w-[450px]:pb-[21px] max-w-[450px]:box-border">
      <div className="w-[1440px] flex flex-row items-start justify-center gap-[188px] max-w-full max-w-[925px]:gap-[47px] max-w-[450px]:gap-[23px] max-w-[1350px]:flex-wrap max-w-[1350px]:gap-[94px]">
        <h1 className="m-0 flex-1 relative text-inherit leading-[120%] uppercase font-normal font-inherit inline-block min-w-[455px] max-w-full max-w-[925px]:text-11xl max-w-[925px]:leading-[36px] max-w-[925px]:min-w-full max-w-[450px]:text-4xl max-w-[450px]:leading-[27px]">
          <span>{`Our vision is to support the innovation of AI blockchain projects `}</span>
          <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            while prioritizing communities and democratizing profits
          </span>
        </h1>
        <div className="w-[552px] flex flex-row items-start justify-start relative min-w-[552px] max-w-full text-3xl font-satoshi max-w-[925px]:min-w-full mq1350:flex-1">
          <img
            className="h-[502px] w-[836px] absolute !m-[0] bottom-[-51px] left-[-769px] overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/image.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full z-[2]">
            <div className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-7 max-w-full border-b-[1px] border-solid border-grey-line">
              <div className="flex-1 flex flex-col items-end justify-start max-w-full">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full max-w-[925px]:flex-wrap">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[30px] min-w-[322px] max-w-full max-w-[450px]:flex-wrap">
                    <img
                      className="h-[114px] w-[100px] relative overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/icon@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[238px] max-w-full">
                      <b className="self-stretch relative leading-[130%] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">
                        <p className="m-0">Profitability and</p>
                        <p className="m-0">Growth</p>
                      </b>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[37px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/frame-145.svg"
                    />
                  </div>
                </div>
                <div className="w-[422px] flex flex-row items-start justify-start max-w-full text-lg">
                  <div className="flex-1 relative leading-[130%] inline-block max-w-full">
                    At Creon, we handpick cutting-edge AI projects and offer our
                    community and token holders early access and investment
                    opportunities. Our community actively contributes to the
                    growth and profitability of these projects, creating a
                    dynamic ecosystem of innovation and shared success.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-7 max-w-full border-b-[1px] border-solid border-grey-line">
              <div className="flex-1 flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full max-w-[925px]:flex-wrap">
                  <div className="h-[114px] w-[110px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/icon-1@2x.png"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[238px] max-w-full">
                    <b className="self-stretch relative leading-[130%] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">{`Transparent & Fair Decentralized Earnings`}</b>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[37px] px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/frame-145-1.svg"
                    />
                  </div>
                </div>
                <div className="w-[422px] hidden flex-col items-start justify-start min-h-[138px] max-w-full text-lg">
                  <div className="self-stretch h-[115px] relative leading-[130%] inline-block">
                    The key element of our proposal is the continuous access to
                    distributed and decentralized earnings generated by AI tools
                    that we provide through their creation or investment in
                    them. This decentralized structure ensures greater
                    transparency and fairness to all participants in the Creon
                    ecosystem.
                  </div>
                </div>
              </div>
            </div>
            <Advantage
              icon="/icon-2@2x.png"
              launchingThe="Launching the"
              future="future"
              atCreonWeDeliverAUniqueOp="What's more, Creon is pioneering in offering the first known opportunity to acquire allocations in tokenised AI projects through our Creon Launchpad platform. This gives investors a unique chance for early engagement in the most promising AI projects, opening the door to potentially high returns."
            />
            <Advantage
              icon="/icon-3@2x.png"
              launchingThe="Limitless Possibilities of AI"
              future={`& Crypto`}
              atCreonWeDeliverAUniqueOp="The possibilities offered by the integration of AI and cryptocurrencies are limitless, and we're just beginning to explore them. As pioneers, our journey into uncharted territory is fraught with challenges, but the rewards promise to be equally extraordinary. Creon isn’t just about profiting from technological innovation; it's about being part of the process that brings these innovations to life."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
