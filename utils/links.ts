import React from "react";
import Dashboard from "../public/Home.png";
import Market from "../public/market.png";
import Statistics from "../public/statistics.png";
import Portfolio from "../public/portfolio.png";
import { StaticImageData } from "next/image";

type NavLink = {
  id: number;
  icon: StaticImageData;
  href: string;
  title: string;
};

const Navlinks: NavLink[] = [
  {
    id: 1,
    icon: Dashboard,
    href: "/",
    title: "Dashboard",
  },
  {
    id: 2,
    icon: Market,
    href: "/market",
    title: "Market",
  },
  {
    id: 3,
    icon: Statistics,
    href: "/statistics",
    title: "Statistics",
  },
  {
    id: 4,
    icon: Portfolio,
    href: "/portfolio",
    title: "Portfolio",
  },
];

export default Navlinks;
