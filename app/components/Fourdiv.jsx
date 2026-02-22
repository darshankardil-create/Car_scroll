import React from "react";

const Fourdiv = ({ opacity }) => {
  return (
    <>
      <div
        className={
          " fixed pointer-events-none rounded-[14px] bg-[#DEF54F] top-[5%] left-[48%] h-38 w-[288px] p-7.5"
        }
        style={{ opacity: opacity(1) }}
      >
        <div className=" text-[58px] font-semibold">58%</div>
        <div className="relative bottom-2.5 font-medium">
          Increase in pick up point use
        </div>
      </div>

      <div
        className={
          " fixed pointer-events-none rounded-[14px] bg-[#6AC9FF] top-[65%] left-[42%] h-38 w-78 p-7.5 "
        }
        style={{ opacity: opacity(2) }}
      >
        <div className=" text-[58px] font-semibold">23%</div>
        <div className="relative bottom-2.5 font-medium">
          Decreased in customer phone calls
        </div>
      </div>

      <div
        className={
          " fixed  text-white rounded-[14px] bg-[#333333] top-[5%] left-[70%] h-38 w-78 p-7.5 "
        }
        style={{ opacity: opacity(3) }}
      >
        <div className=" text-[58px] font-semibold ">27%</div>
        <div className="relative bottom-2.5 font-medium">
          Increase in pick up point use
        </div>
      </div>

      <div
        className={
          " fixed pointer-events-none rounded-[14px] bg-[#FA7328] top-[65%] left-[65%] h-38 w-78 p-7.5 "
        }
        style={{ opacity: opacity(4) }}
      >
        <div className=" text-[58px] font-semibold ">40%</div>
        <div className="relative bottom-2.5 font-medium">
          Decreased in customer phone calls
        </div>
      </div>
    </>
  );
};

export default Fourdiv;
