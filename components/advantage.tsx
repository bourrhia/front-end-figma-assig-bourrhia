import type { NextPage } from "next";

export type AdvantageType = {
  icon?: string;
  launchingThe?: string;
  future?: string;
  atCreonWeDeliverAUniqueOp?: string;
};

const Advantage: NextPage<AdvantageType> = ({
  icon,
  launchingThe,
  future,
  atCreonWeDeliverAUniqueOp,
}) => {
  return (
    <div className="self-stretch box-border overflow-hidden flex flex-row items-start justify-start pt-0 px-0 pb-7 max-w-full text-left text-3xl text-white font-satoshi border-b-[1px] border-solid border-grey-line">
      <div className="flex-1 flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px] max-w-full max-w-[925px]:flex-wrap">
          <div className="h-[114px] w-[110px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={icon}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[238px] max-w-full">
            <b className="self-stretch relative leading-[130%] max-w-[450px]:text-lg max-w-[450px]:leading-[23px]">
              <p className="m-0">{launchingThe}</p>
              <p className="m-0">{future}</p>
            </b>
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
            {atCreonWeDeliverAUniqueOp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
