import DynamicIslandNav from "@/registry/components/snippet/dynamic-island-nav";

export default function DynamicIslandNavDemo() {
    
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-16">
            <DynamicIslandNav  />
            <strong className="text-orange-400">Note: The dynamic island is shown below the navbar of the page.</strong>
        </div>
    );
}