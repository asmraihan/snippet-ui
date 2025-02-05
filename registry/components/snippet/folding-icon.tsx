import React, { useEffect, useRef, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HomeIcon, MessageSquare, Flame } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface LogoItemProps {
  children: ReactNode;
  className?: string;
}

interface LogoRolodexProps {
  items: ReactNode[];
}

export const FoldingIcon: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-orange-300 text-neutral-900">
            <HomeIcon size={30} />
          </LogoItem>,
          <LogoItem key={2} className="bg-blue-300 text-neutral-900">
            <MessageSquare size={30} />
          </LogoItem>,
          <LogoItem key={3} className="bg-red-300 text-neutral-900">
            <Flame size={30} />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex: React.FC<LogoRolodexProps> = ({ items }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 "
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem: React.FC<LogoItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-16 w-16 place-content-center rounded-full text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};