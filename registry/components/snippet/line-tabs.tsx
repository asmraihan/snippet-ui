"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
 
interface TabProps {
  text: string;
  selected: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  customID: string;
}
 
function Tab({
  text,
  selected,
  setSelected,
  customID,
}: TabProps): React.JSX.Element {
  return (
    <button
      type="button"
      onClick={() => {
        setSelected(text);
      }}
      className={`${
        selected ? "text-blue-500" : "hover:text-gray-600"
      } relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300`}
    >
      <span className="relative z-10">{text}</span>
      {selected ? (
        <motion.div
          className="absolute left-0 top-0 flex size-full items-end justify-center"
          layoutId={`${customID}linetab`}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-blue-500" />
        </motion.div>
      ) : null}
    </button>
  );
}
 
interface LineTabsProps {
  customID: string;
  tabs: string[];
}
 
export default function LineTabs({ customID, tabs }: LineTabsProps): React.JSX.Element {
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <div
      className={cn(
        "border-black-500/25 mb-8 flex flex-wrap items-center gap-2",
      )}
    >
      {tabs.map((tab) => (
        <Tab
          text={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab}
          customID={customID}
        />
      ))}
    </div>
  );
}
 