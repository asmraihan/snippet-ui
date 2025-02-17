import { FlipWords } from "@/registry/components/snippet/flip-words";

export default async function FlipWordsDemo() {
  return (
    <div className=" my-20">
        <FlipWords
            words={[
              "Design",
              "Develop",
              "Deploy",
              "Repeat",
            ]}
            className="text-center  z-50 text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] dark:bg-gradient-to-r dark:from-slate-50 dark:to-slate-200 dark:bg-clip-text dark:text-white"
          />
    </div>
  );
}
