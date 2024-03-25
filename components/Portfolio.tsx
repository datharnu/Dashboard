import Image from "next/image";
import React from "react";
import ArrowUp from "../public/Arrow - Up.png";
import Bitcoin from "../public/bitcoin.png";
import upArrow from "../public/Up Arrow.png";
import GraphLine from "../public/Graph Line.png";
import { PortfolioData } from "@/utils/PortfolioData";
export default function Portfolio() {
  return (
    <div className="text-white">
      <div className="-tracking-tighter flex justify-between">
        <h1>PORTFOLIO</h1>
        <div className="flex gap-2">
          <h1>SEE ALL</h1>
          <Image src={ArrowUp} alt="arrow-up-icon" />
        </div>
      </div>
      <div className="mt-10 exchange flex rounded-[8px]  ">
        {PortfolioData.map((data, index) => (
          <div key={data.id} className="flex">
            <div className="flex-col items-center  ">
              {/* Porfolio display */}
              <div className="flex gap-5 items-center rounded-[8px] pt-10 px-10 ">
                {/* Bitcoin Logo */}
                <div>
                  <Image src={data.logo} alt="bitcoin" />
                </div>
                <div className="space-y-2 ">
                  <h1 className="text-gray-400 font-light -tracking-tighter ">
                    {data.coin}
                  </h1>
                  <span className="flex gap-5">
                    <p className="text-2xl">{data.price}</p>

                    <span className="flex items-center border px-2 gap-2 status rounded-full ">
                      <Image src={upArrow} alt="up-arrow" />
                      <p className="text-xs">+10%</p>
                    </span>
                  </span>
                </div>
              </div>
              {/* Graph Line */}
              <div className="-mt-10 mx-10 -pb-28 ">
                <Image src={data.graphImage} alt="rising" />
              </div>
            </div>
            {/* Conditionally render the vertical divider */}
            {index < PortfolioData.length - 1 && (
              <div className="vertical-divider"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
