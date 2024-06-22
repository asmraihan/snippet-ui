import DropdownMenu from "@/registry/components/snippet/dropdown-menu";

import {
  LayoutGridIcon,
  TrashIcon,
  Building2,
  UserCircleIcon,
  SettingsIcon,
  ChevronRightIcon,
  BellIcon,
} from "lucide-react";

export default function DropdownMenuDemo() {

  const items = [
    { icon: <UserCircleIcon size={16} />, name: "Profile" },
    { icon: <LayoutGridIcon size={16} />, name: "Your applications" },
    { icon: <Building2 size={16} />, name: "Teams" },
    { icon: <BellIcon size={16} />, name: "Notifications" },
    {
      icon: <TrashIcon size={16} />,
      name: "Remove account",
      customStyle:
        "!text-red-500 hover:bg-red-500/10 focus-visible:text-red-500 focus-visible:bg-red-500/10 focus-visible:border-red-500/10",
    },
  ];


  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pt-16 pb-64">
      <DropdownMenu items={items} />
    </div>
  );
}