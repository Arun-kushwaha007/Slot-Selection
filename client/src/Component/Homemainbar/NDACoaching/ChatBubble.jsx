import React from "react";

function ChatBubble({ text, className = "" }) {
  return (
    <div className={`p-3 text-sm font-medium leading-loose bg-white rounded-md shadow-[0px_0px_8px_rgba(0,0,0,0.8)] text-zinc-950 ${className}`}>
      {text}
    </div>
  );
}

export default ChatBubble;