import React from "react";
import Image, { StaticImageData } from "next/image";
import Navlinks from "@/utils/links";

type NavLink = {
  id: number;
  icon: StaticImageData;
  title: string;
  href: string;
};

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 mx-6 ">
      {Navlinks.map((item: NavLink) => (
        <div key={item.id} className="flex gap-5 items-center">
          <div>
            <Image src={item.icon} alt={item.title} width={30} />
          </div>
          <div className="text-gray-400 text-[15px] hover:text-white">
            <a href={item.href}>
              <h1>{item.title}</h1>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
