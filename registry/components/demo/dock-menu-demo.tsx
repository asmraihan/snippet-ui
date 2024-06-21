import DockMenu from "@/registry/components/snippet/dock-menu";
import { AlbumIcon, HomeIcon, MonitorIcon } from "lucide-react";

export default function DockMenuDemo() {
  const items = [
    { id: "first-id", icon: <AlbumIcon size={32} /> },
    { id: "second-id", icon: <HomeIcon size={32} /> },
    { id: "third-id", icon: <MonitorIcon size={32} /> },
];

  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 py-16">
      <DockMenu items={items} />
    </div>
  );
}