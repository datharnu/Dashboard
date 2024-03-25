import { StaticImageData } from "next/image";
import Bitcoin from "../public/bitcoin.png";
import GraphLine from "../public/Graph Line 1 new.png";
import GraphLine2 from "../public/Graph Line (1).png";
import Graphline3 from "../public/Graph Line 3 new.png";
import Ethereum from "../public/eth.png";
import TrustNote from "../public/trustnote.png";

type PortfolioList = {
  id: number;
  coin: string;
  logo: StaticImageData;
  price: string;
  graphImage: StaticImageData;
};

export const PortfolioData: PortfolioList[] = [
  {
    id: 1,
    coin: "Bitcoin",
    logo: Bitcoin,
    price: "38.210,70",
    graphImage: GraphLine,
  },

  {
    id: 2,
    coin: "Ethereum",
    logo: Ethereum,
    price: "$2.547,670",
    graphImage: GraphLine2,
  },

  {
    id: 3,
    coin: "TrustNote",
    logo: TrustNote,
    price: "$81.73,560",
    graphImage: Graphline3,
  },
];
