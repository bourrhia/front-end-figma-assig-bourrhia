import type { NextPage } from "next";
import Footer from "./footer";

const VideoBackground: NextPage = () => {
  return (
    <section className="w-full !m-[0] absolute right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start bg-[url('/599561-network-transformation-connection-digital-by-alejandro-campollo-artlist-hd-onlinevideocuttercom-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
      <img
        className="self-stretch w-[1920px] relative max-h-full object-cover hidden min-h-[970px] max-w-full z-[0]"
        alt=""
        src="/599561-network-transformation-connection-digital-by-alejandro-campollo-artlist-hd-onlinevideocuttercom-1@2x.png"
      />
      <div className="h-full w-full absolute !m-[0] top-[970px] right-[-1920px] bottom-[-970px] left-[1920px] [background:linear-gradient(174.64deg,_#3d8bff,_#ab23ff)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
      <div className="flex-1 flex flex-row items-end justify-start relative min-h-[970px] max-w-full z-[2]">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full top-[970px] right-[-1920px] bottom-[-970px] left-[1920px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0))] z-[1]" />
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default VideoBackground;
