import React, { useId } from "react";

interface InputFocusAnimationProps {
    label: string;
    type: string;
    name: string;
    autoComplete: string;
}

export const InputFocusAnimation = ({ label, ...props }: InputFocusAnimationProps) => {
    const id = useId();
    return (
        <div className="group relative z-0 transition-all focus-within:z-10">
            <input
                id={id}
                {...props}
                placeholder=" "
                className="peer block w-full border border-neutral-300 dark:border-neutral-600 bg-transparent dark:bg-zinc-950 px-6 pb-4 pt-8 text-base/6 text-neutral-950 dark:text-neutral-50 ring-4 ring-transparent transition focus:border-neutral-950 dark:focus:border-neutral-50 focus:outline-none focus:ring-neutral-950/5 dark:focus:ring-neutral-50/5 group-first:rounded-t-md group-last:rounded-b-md"
            />
            <label
                htmlFor={id}
                className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 dark:text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 dark:peer-focus:text-neutral-50 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 dark:peer-[:not(:placeholder-shown)]:text-neutral-50"
            >
                {label}
            </label>
        </div>
    )
}