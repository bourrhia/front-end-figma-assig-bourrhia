"use client";

import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/navigation";



const Menu: NextPage = () => {
    const router = useRouter();

    const handleCloseMenu = () => {
        try {
          router.push("/");
        } catch (err) {
          console.error("An error occurred while opening menu: ", err);
        } finally {
          
        }
      };
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-5 px-[15px] pb-[754px] box-border leading-[normal] tracking-[normal] text-center text-base text-white font-satoshi">
      <main className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden max-w-full">
        <img
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[445px] object-cover"
          alt=""
          src="/mainvideogradient195ff22ca768f7dc4ce8-1@2x.png"
        />
        <section className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-col items-start justify-end pt-[425px] px-[15px] pb-[60px] box-border gap-[20px] max-w-full text-left text-[32px] text-white font-monument-extended">
          <div className="w-[445px] h-full absolute !m-[0] top-[812px] right-[-515px] bottom-[-812px] [background:linear-gradient(174.64deg,_#000,_#3d8bff_47.14%,_#ab23ff_99.28%)] [transform:_rotate(-180deg)] [transform-origin:0_0] mix-blend-soft-light z-[1]" />
          <h1 className="m-0 self-stretch h-[245px] relative text-inherit leading-[110%] uppercase font-normal font-inherit inline-block z-[2]">
            Empowering AI-Crypto Innovations and Integrating AI Tools into
            crypto.
          </h1>
          <div className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start pt-1 px-0 pb-2 max-w-full z-[2] border-t-[1px] border-solid border-blue border-b-[1px]">
            <footer className="flex-1 relative text-lg leading-[130%] font-bold font-satoshi text-transparent !bg-clip-text [background:linear-gradient(90deg,_#3d8bff,_#ab23ff)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left inline-block max-w-full">
              Creon «Create On» confidential AI Tools for granting access
              through NFTs.
            </footer>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] [backdrop-filter:blur(10px)] bg-gray-100 z-[3]" />
        </section>
      </main>
      <div className="w-52 h-[812px] relative bg-black hidden z-[1]" />
      <img
        className="w-[34px] h-[34px] absolute !m-[0] right-[144px] bottom-[30px] z-[5]"
        loading="lazy"
        alt=""
        src="/telegram.svg"
      />
      <img
        className="w-[34px] h-[34px] absolute !m-[0] right-[100px] bottom-[30px] overflow-hidden shrink-0 z-[5]"
        loading="lazy"
        alt=""
        src="/discord.svg"
      />
      <img
        className="w-[34px] h-[34px] absolute !m-[0] right-[56px] bottom-[30px] overflow-hidden shrink-0 z-[5]"
        loading="lazy"
        alt=""
        src="/twitter.svg"
      />
      <div className="w-[178px] h-px absolute !m-[0] top-[140px] right-[0px] bg-grey-line z-[5]" />
      <div className="w-[178px] h-px absolute !m-[0] top-[88px] right-[0px] bg-grey-line z-[5]" />
      <div className="w-[178px] h-px absolute !m-[0] top-[190px] right-[0px] bg-grey-line z-[5]" />
      <div className="w-[178px] h-px absolute !m-[0] top-[240px] right-[0px] bg-grey-line z-[5]" />
      <div className="w-[178px] h-px absolute !m-[0] top-[290px] right-[0px] bg-grey-line z-[5]" />
      <div className="!m-[0] absolute top-[104px] right-[94px] flex flex-row items-start justify-start z-[5] text-left">
        <b className="relative leading-[110%]">Creon Pass</b>
      </div>
      <b className="absolute !m-[0] top-[156px] right-[133px] leading-[110%] inline-block z-[5]">
        Token
      </b>
      <div className="!m-[0] absolute top-[156px] right-[91px] rounded-81xl bg-black overflow-hidden flex flex-row items-start justify-start pt-0.5 px-1 pb-px z-[5] text-3xs text-purple">
        <b className="relative leading-[110%]">SOON</b>
      </div>
      <b className="absolute !m-[0] top-[206px] right-[102px] leading-[110%] inline-block z-[5]">
        AI Income
      </b>
      <div className="!m-[0] absolute top-[206px] right-[60px] rounded-81xl bg-black overflow-hidden flex flex-row items-start justify-start pt-0.5 px-1 pb-px z-[5] text-3xs text-purple">
        <b className="relative leading-[110%]">SOON</b>
      </div>
      <b className="absolute !m-[0] top-[256px] right-[75px] leading-[110%] inline-block z-[5]">
        AI Launchpad
      </b>
      <div className="!m-[0] absolute top-[256px] right-[33px] rounded-81xl bg-black overflow-hidden flex flex-row items-start justify-start pt-0.5 px-1 pb-px z-[5] text-3xs text-purple">
        <b className="relative leading-[110%]">SOON</b>
      </div>
      <header className="self-stretch overflow-hidden flex flex-row items-start justify-between gap-[20px] z-[5] text-left text-base text-white font-satoshi">
        <div className="w-[120px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <img
            className="self-stretch h-[33px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/logo1.svg"
          />
        </div>
        <div className="w-[163px] flex flex-row items-start justify-start gap-[15px]">
          <button className="cursor-pointer pt-1.5 px-[21px] pb-2 bg-[transparent] flex-1 rounded-md overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-white">
            <b className="relative text-base leading-[110%] font-satoshi text-white text-center">
              Connect
            </b>
          </button>
          <a className="h-[38px] w-[38px] relative"
          onClick={handleCloseMenu}
          >
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-blue" />
            <img
              className="absolute h-[31.58%] w-[31.58%] top-[34.21%] right-[34.21%] bottom-[34.21%] left-[34.21%] max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/vector-82.svg"
            />
          </a>
        </div>
        <div className="h-[33px] w-[107px] relative hidden">
          <div className="absolute top-[-3.03%] left-[0%] leading-[110%] font-medium">
            0x24Db...3e10
          </div>
          <div className="absolute top-[60.61%] left-[0%] text-xs leading-[110%] font-medium text-grey-text">
            Disconnect
          </div>
        </div>
      </header>
    </div>
  );
};

export default Menu;
