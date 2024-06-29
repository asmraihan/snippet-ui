"use client"

import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { MessagesSquare, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const CONTAINER_SIZE = 200

interface ChatButtonProps {
  children: React.ReactNode
}

const ChatButton: React.FC<ChatButtonProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpand = () => setIsExpanded(!isExpanded)

  return (
    <div
      className={cn(
        "rounded-[24px] border border-black shadow-sm dark:border-black/20",
        "bg-gradient-to-b from-zinc-900 to-black",
        isExpanded
          ? "bg-gradient-to-b dark:from-zinc-900/80 dark:to-zinc-900/90"
          : "dark:from-neutral-900/10 dark:to-black/10 bg-gradient-to-b rounded-full"
      )}
    >
      <ChatButtonContainer
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
      >
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.3,
                duration: 0.4,
                ease: "easeOut",
              },
            }}
          >
            {children}
          </motion.div>
        ) : null}
      </ChatButtonContainer>
    </div>
  )
}

// A container that wraps content and handles animations
interface ChatButtonContainerProps {
  isExpanded: boolean
  toggleExpand: () => void
  children: ReactNode
}

const ChatButtonContainer: FC<ChatButtonContainerProps> = ({
  isExpanded,
  toggleExpand,
  children,
}) => {
  return (
    <motion.div
      className={cn(
        "relative   border-black/10 border shadow-lg flex flex-col space-y-1  items-center  text-white  cursor-pointer z-10",
        !isExpanded
          ? "bg-gradient-to-b from-black to-black/90 dark:from-black dark:to-black/90"
          : ""
      )}
      layoutRoot
      layout
      initial={{ borderRadius: 211, width: "4rem", height: "4rem" }}
      animate={
        isExpanded
          ? {
            borderRadius: 20,
            width: CONTAINER_SIZE,
            height: CONTAINER_SIZE + 50,

            transition: {
              type: "spring",
              damping: 25,
              stiffness: 400,
              when: "beforeChildren",
            },
          }
          : {
            borderRadius: 211,
            width: "4rem",
            height: "4rem",
          }
      }
    >
      {children}

      <motion.div
        className="absolute"
        initial={{ x: "-50%" }}
        animate={{
          x: isExpanded ? "0%" : "-50%",
          transition: {
            type: "tween",
            ease: "easeOut",
            duration: 0.3,
          },
        }}
        style={{
          left: isExpanded ? "" : "50%",
          bottom: 6,
        }}
      >
        {isExpanded ? (
          <motion.div
            className="p-[10px] group bg-neutral-800/50 dark:bg-black/50 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300 "
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={false}
            animate={{
              rotate: -360,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <XIcon
              className={cn(
                "h-7 w-7 text-cyan-100/30 dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200 "
              )}
            />
          </motion.div>
        ) : (
          <motion.div
            className={cn(
              "p-[10px] group bg-neutral-200 text-cyan-50 border border-cyan-100/10  shadow-2xl transition-colors duration-200"
            )}
            style={{ borderRadius: 24 }}
            onClick={toggleExpand}
            layoutId="expand-toggle"
            initial={{ rotate: 360 }}
            animate={{
              rotate: 0,
              transition: {
                duration: 0.4,
              },
            }}
          >
            <MessagesSquare className="h-7 w-7 text-black dark:text-neutral-900" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export { ChatButton }
