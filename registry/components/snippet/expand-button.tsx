"use client";
import React, { type HTMLAttributes, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface OauthBtnProps extends HTMLAttributes<HTMLButtonElement> {
  type: "Google" | "Github";
}

function OauthBtn({ type, ...props }: OauthBtnProps): React.JSX.Element {
  return (
    <button
      type="button"
      {...props}
      className="flex w-full items-center justify-center gap-2 rounded border border-black/10 bg-gray-300/10 px-4 py-2 text-lg font-medium text-black transition-shadow duration-500 ease-in-out hover:shadow dark:text-white"
    >
      {type === "Google" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
          />
          <path
            fill="#FF3D00"
            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
          />
          <path
            fill="#1976D2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 256 250"
          className="w-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
        </svg>

      )}
      Continue with {type}
    </button>
  );
}

export default function ExpandSignIn(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <AnimatePresence>
      <motion.div
        layout
        transition={{ layout: { type: "spring", bounce: 0.3, mass: 0.4 } }}
        initial={{ borderRadius: 100 }}
        animate={{ borderRadius: isOpen ? 10 : 100 }}
        className={cn(
          isOpen
            ? " p-4 shadow-lg md:w-[30vw]"
            : "shadow-md transition-shadow duration-500 hover:shadow-lg",
          " border border-black/10 bg-gray-200/10  text-lg font-medium text-black dark:text-white",
        )}
      >
        <motion.button
          {...(isOpen
            ? {}
            : {
              onClick: () => {
                setIsOpen(!isOpen);
              },
            })}
          layout="position"
        >
          <div
            className={cn(
              isOpen
                ? "flex w-full cursor-default justify-between pb-2 "
                : "gap-2 px-4 py-2 duration-500 ease-in-out hover:gap-4",
              "flex items-center",
            )}
          >
            Sign In{" "}
            {!isOpen ? (
              <svg
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : null}
          </div>
        </motion.button>

        {isOpen ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="flex flex-col gap-2 border-t border-black/10 pt-2 dark:border-white/10">
              <OauthBtn
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                type="Google"
              />
              <OauthBtn
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                type="Github"
              />
              <div className="flex w-full items-center gap-2 text-black/50 dark:text-white/50">
                <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
                Or
                <div className="h-[1px] w-full bg-black/10 dark:bg-white/10" />
              </div>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full rounded border border-black/10 bg-transparent p-2 transition-shadow duration-500 ease-in-out hover:shadow dark:border-white/10"
                />
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded bg-black px-4 py-2 text-white duration-500 ease-in-out hover:gap-4 hover:shadow-md dark:bg-white dark:text-black"
                  type="button"
                >
                  Continue{" "}
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}