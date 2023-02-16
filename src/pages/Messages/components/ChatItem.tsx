import React from "react";

interface ChatItemProps {
  chat: {
    id: number;
    name: string;
    imageUrl: string;
    lastMessageAt: string;
    latestMessage: string;
    unread: boolean;
  };
}

export default function ChatItem(props: ChatItemProps) {
  return (
    <div className="flex py-6 border-b border-front border-opacity-20 cursor-pointer bg-opacity-0 bg-front duration-150 hover:bg-opacity-10">
      <img
        src={props.chat.imageUrl}
        alt={`${props.chat.name} profile picture`}
        className="aspect-square ml-2 w-1/6 rounded-full border-2 border-transparent bg-gradient-to-br from-primary to-secondary bg-clip-border object-cover"
      />
      <div className="truncate h-full justify-between flex flex-1 flex-col px-4 py-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {props.chat.name}
          </h3>
          <p className="text-front text-opacity-50">
            {props.chat.lastMessageAt}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p className="truncate font-light">{props.chat.latestMessage}</p>
          {props.chat.unread && (
            <div className="h-full aspect-square bg-secondary rounded-full ml-3 flex justify-center items-center text-front font-bold">!</div>
          )}
        </div>
      </div>
    </div>
  );
}
