import LineTabs from "@/registry/components/snippet/line-tabs";

export default function AnimatedTabsDemo() {

 	const tabs = ["Home", "Docs", "Components"];
    
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-16">
            <LineTabs tabs={tabs}  customID="linetab" />
        </div>
    );
}