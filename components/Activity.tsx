import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import HistoryTable from "./HistoryTable";
import Withdrawal from "./Withdrawal";
export default function Activity() {
  return (
    <div>
      <div className="flex items-center text-white gap-[36rem]">
        <h1 className="-tracking-[-2px] text-sm">ALL ACTIVITY</h1>

        <Select>
          <SelectTrigger className="w-[180px] border-2 rounded-[7px] borderColor pr-2">
            <SelectValue placeholder="Order History" />
          </SelectTrigger>
          <SelectContent className="text-white SearchColor text-sm ">
            <SelectGroup>
              <SelectLabel>History</SelectLabel>
              <SelectItem value="apple">January</SelectItem>
              <SelectItem value="banana">February</SelectItem>
              <SelectItem value="blueberry">March</SelectItem>
              <SelectItem value="grapes">April</SelectItem>
              <SelectItem value="pineapple">May</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-5 ">
        <HistoryTable />
        <Withdrawal />
      </div>
    </div>
  );
}
