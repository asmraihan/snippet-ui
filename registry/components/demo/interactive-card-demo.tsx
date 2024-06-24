import { Button } from "@/components/ui/button";
import { InteractiveCard } from "@/registry/components/snippet/interactive-card";
import { AnimatePresence, MotionProps, motion } from "framer-motion"
import { ShoppingBag, ScanIcon, Box } from 'lucide-react';


export default function InteractiveCardDemo() {

  const topContent = (
    <div className="bg-accent/90 rounded-md text-primary shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)]">
      <h3 className="text-lg px-4 py-2">Game Cube</h3>
      <h3 className="px-4 pb-2">Price: $123</h3>
    </div>
  )

  // Content that animates into top from the middle
  const topAnimateContent = (
    <>
      <motion.img
        transition={{ duration: 0.3, ease: "circIn" }}
        src="/gamecube.jpg"
        layoutId="img"
        width={78}
        height={100}
        alt="basic image"
        className="rounded-sm absolute top-1.5 right-2 shadow-lg border-2 border-white dark:border-black"
      />

      <motion.div
        className="h-[68px] w-[86px] absolute top-[2px] right-[4px] bg-transparent border-[2px] rounded-br-sm rounded-sm  border-neutral-800/80 dark:border-neutral-200/80 border-dashed  ml-auto  mb-[6px] dark:mb-[3px]"
        initial={{ opacity: 0, scale: 1.6, y: 0, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { delay: 0.35, duration: 0.15 },
        }}
        exit={{
          opacity: 0,
          y: 100,
          filter: "blur(4px)",
          transition: { delay: 0.0, duration: 0 },
        }}
      />
    </>
  )

  // Content that animates from the top to the middle
  const middleContent = (
    <motion.img
      src="/gamecube.jpg"
      layoutId="img"
      width={180}
      height={200}
      alt="basic image"
      className="rounded-sm  border-2 border-white dark:border-black"
    />
  )

  // Content for the bottom part of the card that shows more details on hover
  const bottomContent = (
    <div className="pb-4">
      <div className="flex w-full flex-col gap-1 bg-primary/90 border-t border-t-black/10 rounded-t-lg px-4 pb-6">
        <div className="font-sans text-[14px] font-medium text-white dark:text-[#171717] flex gap-1 pt-2.5 items-center">
          <Box size={16} />
          <p className="font-semibold">Game Cube</p>
        </div>
        <div className="w-full text-pretty font-sans text-[13px] leading-4 text-neutral-200 dark:text-[#171717] pb-2 ">
          A game console developed and manufactured by Nintendo.
        </div>

        <div className="px-1 py-1 rounded-xl flex flex-col gap-1">
          <Button variant={"outline"}>
            <ShoppingBag size={16} className="me-1" />
            Add to card
          </Button>

          <Button variant={"outline"}>
            <ScanIcon size={16} className="me-1" />
            View details
          </Button>
        </div>
      </div>
    </div>
  )


  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
      <InteractiveCard
        className="bg-card dark:bg-[#1A1A1A] "
        topContent={topContent}
        topAnimateContent={topAnimateContent}
        middleContent={middleContent}
        bottomContent={bottomContent}
      />
    </div>
  );
}