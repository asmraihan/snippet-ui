'use client';

import Image from 'next/image';
import { Aperture, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DynamicIslandNav() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 150) {
      setHidden(true);
      setShowNav(false);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={`fixed inset-0 top-24 w-[95%] sm:w-[90%] mx-auto bg-zinc-950 font-medium text-slate-50 flex  max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full font-mono h-14 p-5 overflow-hidden `}
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,

          alignItems: 'center',
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 200,
          borderRadius: 22,
          alignItems: 'start',
          transition: { delay: 0 },
        },
      }}
      initial={'short'}
      animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
      transition={{
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }}
    >
      <div className="min-w-[40px] min-h-[40px] rounded-full gap-2  flex items-center justify-center">
        <Aperture size={40} />
      </div>
      <motion.ul
        className={`w-full ${showNav
          ? '[--display-from:none] [--display-to:flex]'
          : 'max-sm:[--display-from:none] sm:[--display-to:flex]'
          }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10`}
        variants={{
          hidden: {
            display: 'var(--display-from, none)',
            opacity: 'var(--opacity-from, 1)',
            transition: { duration: 0.1, delay: 0 },
          },
          visible: {
            display: 'var(--display-to, none)',
            opacity: 'var(--opacity-to, 1)',
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        initial={'hidden'}
        animate={[
          hidden && !showNav ? 'hidden' : 'visible',
          showNav ? 'visible' : '',
        ]}
      >
        <li>
          <Link
            href="/home"
            aria-label="scroll to contact section"
            role="button"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            aria-label="scroll to contact section"
            role="button"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="contact"
            aria-label="scroll to contact section"
            role="button"
          >
            Contact
          </Link>
        </li>
      </motion.ul>

      <motion.div
        className="w-full [--display-from:none][--display-to:inline-block] "
        variants={{
          hidden: {
            display: 'var(--display-from, none)',
            // opacity: 'var(--opacity-from)',
            transition: { delay: 0, duration: 0.3 },
          },
          visible: {
            display: 'var(--display-to)',
            // opacity: 'var(--opacity-to)',
            transition: { delay: 0.2, duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={hidden ? 'visible' : 'hidden'}
      >
        <Button variant="ghost" className="w-full" asChild>
          <Link
            href="contact"
            aria-label="scroll to contact section"
            role="button"
          >
            Contact
          </Link>
        </Button>
      </motion.div>

      <Button
        size={'icon'}
        variant={'ghost'}
        className="rounded-full min-w-[40px] sm:hidden"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
      >
        {showNav ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </motion.nav>
  );
}