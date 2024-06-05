"use client";

import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";


export function IntroFadeIn({ githubStars }: { githubStars: number | null }) {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };


    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="hidden sm:mb-8 sm:flex sm:justify-center"
            >
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-ring/10 hover:ring-ring/20">
                    Introducing Snippet UI.{" "}
                    <Link href="/docs" className="font-semibold text-primary">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </motion.div>

            <motion.h1
                className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
             Effortless design integration  
                <br />
                for developers. 
            </motion.h1>
            <motion.p
                className="mt-2 text-lg leading-8 text-muted-foreground"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                SnippetUI is a Open source, TypeScript ready, Copy and paste library crafted for Design Engineers.
            </motion.p>
            <motion.div
                className="mt-4 flex items-center justify-center gap-x-6"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href={"https://github.com/asmraihan/snippet-ui"} target="_blank" rel="noreferrer">
                    <Badge
                        aria-hidden="true"
                        className="rounded-md px-3.5 py-1.5"
                        variant="secondary"
                    >
                        <Icons.gitHub className="mr-2 size-3.5" aria-hidden="true" />
                        {githubStars} stars on GitHub
                    </Badge>
                    <span className="sr-only">GitHub</span>
                </Link>
            </motion.div>
            <motion.div
                className="mt-6 flex items-center justify-center gap-x-6"
                variants={FADE_UP_ANIMATION_VARIANTS}
            >
                <Link href="/docs/components" passHref>
                    <Button>Get Started</Button>
                </Link>
                <Link href="/docs" passHref>
                    <Button variant="outline">
                        Learn more&nbsp;<span aria-hidden="true">→</span>
                    </Button>
                </Link>
            </motion.div>
        </motion.div>
    );
}