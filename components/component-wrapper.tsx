import { cn } from "@/lib/utils";
import { Background } from "./background";

interface ComponentWrapperProps {
  className?: string;
  children: any;
}
const ComponentWrapper = ({ className, children }: ComponentWrapperProps) => {
  return (
    <div
      className={cn(
        "not-prose max-w-screen relative flex flex-col items-center justify-center rounded-xl bg-background p-0 md:border md:p-16",
        className,
      )}
    >
      <div
        className={cn(
          `absolute inset-0 h-full w-full`,
          // `bg-[radial-gradient(#00000055_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)]`,
          // "lab-bg [background-size:20px_20px]",
          `bg-[url('/grid.svg')] invert dark:invert-0`,
        )}
      />
      {children}
      {/* <Background /> */}
    </div>
  );
};

export default ComponentWrapper;
