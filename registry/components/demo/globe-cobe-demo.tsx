import GlobeCobe from "@/registry/components/snippet/globe-cobe";

export default function GlobeCobeDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-40 pb-64  md:pb-96">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-9xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe 
      </span>
      <GlobeCobe className="top-10 max-w-[500px]" />
    </div>
  );
}
