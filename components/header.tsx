"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";

const Header: NextPage = () => {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    try {
      router.push("/menu");
    } catch (err) {
      console.error("An error occurred while opening menu: ", err);
    } finally {
      
    }
  };

  return (
    <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] z-[3] text-center text-lg text-white font-satoshi">
      <div className="w-[20px] sm:w-[140px] lex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
        <img
          className="  sm:self-auto  sm:max-w-none h-[39px] relative  overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div className="w-[791px] flex flex-row items-start justify-start gap-[58px] max-w-full max-w-[450px]:gap-[29px] max-w-[1825px]:w-[659px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border max-w-full">
          <div className="lg:self-stretch lg:flex flg:lex-row lg:items-start lg:justify-end lg:gap-[40px] max-w-[925px]:gap-[20px]  hidden ">
            <div className="flex flex-row items-center justify-center text-left">
              <b className="relative leading-[20px] inline-block min-w-[95px] whitespace-nowrap">
                Creon Pass
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative leading-[20px] inline-block min-w-[50px]">
                Token
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative leading-[20px] inline-block min-w-[94px] whitespace-nowrap">
                AI Revenue
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <b className="relative leading-[20px] inline-block min-w-[116px] whitespace-nowrap">
                AI Launchpad
              </b>
              <div className="rounded-81xl bg-black overflow-hidden flex flex-row items-center justify-center pt-0.5 px-1 pb-px text-3xs text-purple">
                <b className="relative leading-[110%] inline-block min-w-[30px]">
                  SOON
                </b>
              </div>
            </div>
          </div>
        </div>
        <button 
        className="cursor-pointer bg-[transparent] mr-2 h-11 w-auto sm:w-[132px]rounded-md box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[11px] px-1 sm:px-7 pb-[13px] gap-[13px] border-[2px] border-solid border-white   lg:hidden"
        onClick={handleOpenMenu}
        >
          <b className="text-white text-[0.875rem] sm:text-base relative leading-[20px] inline-block min-w-[72px] shrink-0 [debug_commit:1de1738]">
            Connect
          </b>
          
        </button>
      </div>
    </div>
  );
};

export default Header;
