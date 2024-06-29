"use client"

import { ChatButton } from "@/registry/components/snippet/chat-component";

export default function ChatComponentDemo() {
  return (
    <div className="w-full h-full min-h-[240px]">
      <div className="absolute bottom-4 right-4">
        <ChatButton>
          <MessageSection />
        </ChatButton>
      </div>
    </div>
  )
}


export function MessageSection() {

  return (
    <div className="flex items-center justify-center p-6">
        <span className="font-bold text-lg">An interactive chat component</span>
    </div>
  )
}
