import type { NextPage } from "next";
import VideoBackground from "../components/video-background";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import ComingSoon from "../components/coming-soon";
import Component from "../components/component";

const MainPage1920px: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[84px] box-border leading-[normal] tracking-[normal]">
      <VideoBackground />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <ComingSoon />
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-start py-20 px-5 box-border gap-[20px] max-w-full z-[4] max-w-[925px]:pt-[34px] max-w-[925px]:pb-[34px] max-w-[925px]:box-border max-w-[1350px]:pt-[52px] max-w-[1350px]:pb-[52px] max-w-[1350px]:box-border">
        <Component
          aIProspectsMarketSizeAndD="AI Prospects, Market Size, and Development Pace"
          theAIMarketIsOneOfTheMost="The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation."
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1@2x.png"
        />
        <Component
          aIProspectsMarketSizeAndD="AI Tools and Market"
          theAIMarketIsOneOfTheMost="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1-1@2x.png"
          propLineHeight="46px"
        />
        <Component
          aIProspectsMarketSizeAndD="AI, Crypto, and NFT Market"
          theAIMarketIsOneOfTheMost="Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
          aiCloudConceptWithRobotHe="/aicloudconceptwithrobothead-1-2@2x.png"
          propLineHeight="46px"
        />
      </section>
      <div className="w-[5px] h-[6162px] relative bg-black hidden z-[7]" />
    </div>
  );
};

export default MainPage1920px;
