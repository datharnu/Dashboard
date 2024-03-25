import ethereum from "../public/eth.png";
import bitcoin from "../public/bitcoin.png";
import trustNote from "../public/trustnote.png";
import usd from "../public/usdt.png";
import { StaticImageData } from "next/image";

export type CryptoList = {
  id: number;
  name: string;
  logo: StaticImageData;
  price: number;
};

const CryptoLists: CryptoList[] = [
  {
    id: 1,
    name: "ETH",
    logo: ethereum,
    price: 2355,
  },
  {
    id: 2,
    name: "BTC",
    logo: bitcoin,
    price: 65000,
  },
  {
    id: 3,
    name: "TRN",
    logo: trustNote,
    price: 100,
  },
  {
    id: 4,
    name: "USD",
    logo: usd,
    price: 50.943,
  },
];

export default CryptoLists;
