"use client";
import Image from "next/image";
import React from "react";
import Search from "../public/Search.png";
import Filter from "../public/Group 10.png";
import wallet from "../public/Walletnav.png";
import ProfilePic from "../public/Unsplash-Avatars_0004s_0017_sirio-MM93yAHyXPs-unsplash.png";
export default function SearchForm() {
  return (
    <div className="flex my-12 gap-5">
      {/* Search Input */}
      <form className="relative ">
        <input
          type="text"
          placeholder="Search Token or Coin"
          className="border-2 text-white  SearchColor borderColor rounded-[7px] w-[55rem] px-20 py-4 "
        />
        <Image
          src={Search}
          alt="search-icon"
          className="absolute left-7 top-3 items-center"
        />
        <Image
          src={Filter}
          alt="filter-icon"
          className="absolute right-7 top-4"
        />
      </form>
      {/* Connect Wallet */}
      <form className="relative">
        <input
          type="button"
          value="Connect wallet "
          className="border-2 text-gray-400 text-right SearchColor borderColor rounded-[7px] w-[15rem] pr-10 py-4 "
        />
        <Image
          src={wallet}
          alt="search-icon"
          className="absolute left-7 top-3 items-center"
        />
      </form>
      {/* Avatar */}
      <div className="mt-2 ml-7 ">
        <Image src={ProfilePic} alt="profile" />
      </div>
    </div>
  );
}
