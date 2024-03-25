import React from "react";
import DateIcon from "../public/Calendar.svg";
import { Historys } from "@/utils/History";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import Color1 from "../public/Ellipse 23 (1).png";
import Color2 from "../public/Ellipse 23.png";
import Color3 from "../public/Ellipse 23 (2).png";

export default function HistoryTable() {
  return (
    <div className="text-white w-[55rem] my-10 text-sm font-light">
      <div className="flex-col rounded-[8px] exchange py-10 px-10 space-y-8 ">
        {Historys.map((History: any) => (
          <div key={History.id} className="flex justify-between">
            {/* Name of Coin */}
            <div
              style={{
                maskImage:
                  History.coin === "BTC"
                    ? `url(${Color1})`
                    : History.coin === "ETH"
                    ? `url(${Color2})`
                    : `url(${Color3})`,
              }}
              className="flex items-center "
            >
              <p>{History.coin}</p>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <Image src={DateIcon} alt="date-icon" />
              <p className="font-medium">{History.date}</p>
            </div>
            {/* Price */}
            <div className="flex items-center ">
              <DollarSign width={15} />
              <p>{History.price}</p>
            </div>
            {/* Amount with the colors */}
            <div
              style={{
                color:
                  History.coin === "BTC"
                    ? "#ED8E1B"
                    : History.coin === "ETH"
                    ? "#B5A5E7"
                    : "#2DE7F3",
              }}
            >
              <p>{History.amount}</p>
            </div>

            {/* Status */}
            <div className="border status px-2 rounded-xl ">
              <p>{History.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
