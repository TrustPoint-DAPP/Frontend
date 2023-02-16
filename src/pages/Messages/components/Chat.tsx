import React, { useState } from "react";

export default function Chat() {
  const [currentChat, setCurrentChat] = useState([]);

  return (
    <div className="flex-1 h-full flex flex-col border-front border-l border-opacity-20">
      <div className="py-2  text-lg font-medium tracking-wider italic text-center bg-foreground text-front">
        Jain Sanghatan
      </div>
      <div className="flex-1"></div>
      <div className="flex p-3 gap-x-2 backdrop-blur-lg border-t border-front border-opacity-30">
        <button className="btn-2 px-4 py-2">
          <img src="/icons/doc.svg" alt="deal icon" className="brightness-0 invert aspect-square w-5 mr-2" />
          Deal</button>
        <input type="text" className="flex-1 rounded-xl px-2 focus:outline-none" placeholder="Type a message" />
        <button className="btn-1 bg-opacity-50 rounded-lg">
          <img
            src="/icons/send.svg"
            alt="send message button"
            className="brightness-0 invert px-2 w-12 object-cover"
          />
        </button>
      </div>
    </div>
  );
}
