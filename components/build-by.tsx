"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";
import { Icons } from "./icons";

export default function BuildBy() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Link href="https://github.com/asmraihan">
                    <Button variant="link" className="">
                        Raihan
                    </Button>
                </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/121637612?v=4" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Built by Asm Raihan</h4>
                        <p className="text-sm">
                            Check out my other projects{" "}
                            <Icons.arrowDown className="inline-block h-4 w-4" />
                        </p>
                        <div className="flex items-center pt-2 space-x-2">
                            <Link
                                href="https://www.twitter.com/asmraihan"
                                rel="noopener"
                                target="_blank"
                            >
                                <Button variant="ghost" size="icon">
                                    <Icons.twitter className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link
                                href="https://www.github.com/asmraihan"
                                rel="noopener"
                                target="_blank"
                            >
                                <Button variant="ghost" size="icon">
                                    <Icons.gitHub className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/asmraihan/"
                                rel="noopener"
                                target="_blank"
                            >
                                <Button variant="ghost" size="icon">
                                    <Icons.linkedIn className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    );
}