import React from "react";
import ExchangeComponent from "./shared/Exchange";
import CryptoLists from "@/utils/CryptoLists";
import Image from "next/image";
import arrow from "../public/Arrow - Right.svg";
export default function CryptoExchange() {
  return (
    <section className=" text-sm">
      <hr className="border-t-2 borderColor -mx-7 pb-8" />
      <div className="  text-white  borderColor">
        <h1 className="tracking-[2px]">EXCHANGE</h1>

        <div className="flex my-10 justify-between max-w-[17.5rem]">
          <h2>
            1 <span className="text-gray-400">ETH</span>
          </h2>
          <Image src={arrow} alt="Arrow-up" />
          <div>
            <p>$2.547,17</p>
          </div>
        </div>
        <ExchangeComponent cryptoList={CryptoLists} />
        <ExchangeComponent cryptoList={CryptoLists} />

        <div className="my-10 ">
          <button
            type="submit"
            className="border py-3 px-[5.2rem] text-sm rounded-[10px] border-blue-600 bg-blue-600 bg-opacity-20 "
          >
            Check Exchange
          </button>
        </div>

        <div className="flex text-xs gap-24 mt-16">
          <p className="text-gray-400">Crypto Trading Tutorial</p>
          <p>Read more</p>
        </div>
      </div>
    </section>
  );
}
