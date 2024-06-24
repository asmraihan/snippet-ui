import { useState } from "react";
import NumericCounter from "@/registry/components/snippet/numeric-counter";
import { Plus, Minus } from 'lucide-react';

export default function ExpandSignInDemo() {
  const [value, setValue] = useState<number>(1000);
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
      <button
        type="button"
        className="rounded p-2 transition-colors hover:bg-gray-200/50 hover:shadow"
        onClick={() => {
          setValue(value - 100);
        }}
      >
        <Minus size={16} />
      </button>
      <NumericCounter
        value={value}
        className="flex w-[5vw] justify-center text-2xl font-medium drop-shadow"
      />
      <button
        type="button"
        className="rounded p-2 transition-colors hover:bg-gray-200/50 hover:shadow"
        onClick={() => {
          setValue(value + 100);
        }}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
