import React from "react";
import Image from "next/image";

const Roaddiv = ({ scrollgreayh, innerwidth, car, scroll, wel, localposi }) => {
  return (
    <>
      <div
        className={
          " h-130 min-h-screen overflow-y-auto min-w-screen overscroll-none bg-[#D1D1D1]"
        }
        ref={scrollgreayh}
      >
        <div className="h-[265vh]" />
        {/* 3 times more long viewport for scroll */}
        <div className="min-w-screen h-50 fixed  bg-[#1E1E1E] top-1/3 ">
          <div
            className={"h-50 bg-[#45db7d] "}
            style={{ width: `${scroll + 70}px` }}
          >
            <div className="font-black text-[128px] fixed pt-3 pl-10 ">
              {"WELCOME4ITZFIZZ".split("").map((i, ind) => {
                if (i === "4") {
                  return <span className={"p-3"} key={ind}></span>;
                } else {
                  return (
                    <span
                      className="text-[#1E1E1E] "
                      ref={(o) => {
                        wel[ind] = o; // i is ref callback which pass root of span
                      }}
                      key={ind}
                    >
                      {i}
                    </span>
                  );
                }
              })}
            </div>

            <div
              style={{ left: Math.min(scroll, innerwidth - 160) }}
              className="relative "
              ref={car}
            >
              {/* 160 is half width of car */}
              <Image
                height={140}
                src="/Car_scroll/Car/car.png"
                width={420}
                alt="McLaren-Car"
                className=" min-h-35 min-w-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Roaddiv;
