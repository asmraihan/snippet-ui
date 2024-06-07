import GlobeCobe from "@/registry/components/snippet/globe-cobe";
import { motion } from "framer-motion";

export default function GlobeCobeDemo() {
  return (

    <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 text-center">
            Globe
          </h2>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 md:h-80 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full md:h-full z-10">
          <GlobeCobe className="top-10 " />
        </div>
      </div>
    </div>
  );
}
