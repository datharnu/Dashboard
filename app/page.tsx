import Image from "next/image";
import Logo from "../public/Crust.svg";
import Navbar from "@/components/Navbar";
import CryptoExchange from "@/components/CryptoExchange";
import SearchForm from "@/components/SearchForm";
import Activity from "@/components/Activity";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="flex gap-2 pb-20 ">
      <div className=" mx-[30px] pr-7  border-2 border-l-0 border-t-slate-800 borderColor border-y-0 ">
        <div className=" pb-16  ">
          {/* logo */}
          <div className="my-12  text-white flex items-center">
            <Image src={Logo} alt="logo" width={60} />
            <span className="text-[24px]">rypts</span>
          </div>

          {/* Navbar */}
          <Navbar />
        </div>
        <CryptoExchange />
      </div>

      <article>
        <SearchForm />
        <Activity />
        <Portfolio />
      </article>
    </main>
  );
}
