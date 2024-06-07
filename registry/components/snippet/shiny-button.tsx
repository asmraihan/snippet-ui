
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export interface ShinyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  (
    {
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn(
          buttonVariants(),
          "shadow-2xl whitespace-pre-wrap text-sm font-medium leading-none tracking-tight max-w-52 gap-2 overflow-hidden",
          "group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* shine */}
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white dark:bg-black opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
        <div className="flex items-center">
          {children}
        </div>


      </button>
    );
  },
);

ShinyButton.displayName = "ShinyButton";

export default ShinyButton;
