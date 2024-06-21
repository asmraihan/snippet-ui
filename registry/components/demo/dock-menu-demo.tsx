import DockMenu from "@/registry/components/snippet/dock-menu";

export default function DockMenuDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-16">
      <DockMenu />
    </div>
  );
}