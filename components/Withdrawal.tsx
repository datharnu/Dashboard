import React from "react";
import Wallet from "../public/Wallet.png";
import Image from "next/image";

export default function Withdrawal() {
  return (
    <div className="text-white exchange  w-[21rem] rounded-[8px] mt-10 mb-10  ">
      {/* Wallet Image */}
      <div className="flex justify-center items-center">
        <Image
          src={Wallet}
          alt="wallet-jpg"
          className="relative  bottom-16 items-center"
        />
      </div>
      {/* Total balance text */}
      <div className="font-light text-center space-y-5 -mt-5 ">
        <p className="text-sm">Total balance</p>
        <p className="text-2xl">1.6121428</p>
        <p className="text-sm status ">3,700.96 USD</p>
      </div>
      <div className="flex justify-center mt-8 ">
        <button className=" rounded-[8px] bg-blue-600 px-24 py-3 withdraw ">
          Withdraw
        </button>
      </div>
    </div>
  );
}
