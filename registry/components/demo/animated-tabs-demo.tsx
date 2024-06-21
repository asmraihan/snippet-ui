import AnimatedTabs from "@/registry/components/snippet/animated-tabs";

export default function AnimatedTabsDemo() {

    const tabs = [
        {
            title: "Product",
        },
        {
            title: "Services",
        },
        {
            title: "About",
        },
    ];
    
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-16">
            <AnimatedTabs tabs={tabs} />
        </div>
    );
}