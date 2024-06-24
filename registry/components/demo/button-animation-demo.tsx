import { ButtonAnimation } from "@/registry/components/snippet/button-animation";
import { ArrowRightIcon } from "lucide-react";

export default function ButtonAnimationDemo() {
  return (
    <div className="z-10 min-h-[16rem] flex items-center justify-center">
      <ButtonAnimation variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
        Icon right
      </ButtonAnimation>
    </div>
  );
}
