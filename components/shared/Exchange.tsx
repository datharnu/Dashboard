import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CryptoLists, { CryptoList } from "@/utils/CryptoLists";
import Image from "next/image";
import React from "react";

// Define the type for the crypto object
type Crypto = {
  id: number;
  name: string;
  logo: string; // Assuming the logo is a string representing the image URL
  price: number;
};

// Define the props type for the ExchangeComponent
type ExchangeComponentProps = {
  filteredCrypto?: Crypto; // Make filteredCrypto optional
  cryptoList: CryptoList[];
};

const ExchangeComponent: React.FC<ExchangeComponentProps> = ({
  filteredCrypto,
  cryptoList,
}) => {
  return (
    <div className="max-w-72 text-white font-thin ">
      <div className="mt-5 flex py-3 overflow-y-auto max-h-14 text-[18px] items-center justify-between px-6 exchange rounded-xl">
        <div className=" ">
          {/* Add conditional check for filteredCrypto */}
          <p>{filteredCrypto ? filteredCrypto.id : ""}</p>
        </div>
        <Select>
          <SelectTrigger className="w-[500px] text-sm">
            <SelectValue
              placeholder={
                <div className="flex items-center gap-3">
                  {/* Add conditional check for filteredCrypto */}
                  {filteredCrypto && (
                    <Image
                      src={filteredCrypto.logo}
                      alt={filteredCrypto.name}
                      width={40}
                    />
                  )}
                  {/* Add conditional check for filteredCrypto */}
                  <span>{filteredCrypto ? filteredCrypto.name : "Select"}</span>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent className=" border-y-2 SearchColor text-gray-400  font-semibold  ">
            <div className=" ">
              {cryptoList.map((item: any) => (
                <div key={item.id} className="  ">
                  <SelectItem value={item}>
                    <div className="flex justify-between items-center py-2  ">
                      <div>
                        <span>{item.price}</span>
                      </div>
                      <div className="flex items-center gap-3 py-2">
                        <Image src={item.logo} alt={item.name} width={40} />
                        <span>{item.name}</span>
                      </div>
                    </div>
                  </SelectItem>
                </div>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ExchangeComponent;
