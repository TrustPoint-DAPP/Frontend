import React from "react";
import { Celeb, Message, Organization } from "../../../interfaces/Database";
import { getIPFSImageURL } from "../../../utils/getIPFSImageURL";

interface ChatItemProps {
  chat: Message & { celeb: Celeb; org: Organization };
  sender: Celeb | Organization;
  onClick: Function;
}

export default function ChatItem(props: ChatItemProps) {
  return (
    <div
      onClick={props.onClick as any}
      className="flex py-6 border-b border-front border-opacity-20 cursor-pointer bg-opacity-0 bg-front duration-150 hover:bg-opacity-10"
    >
      <img
        src={getIPFSImageURL(props.sender?.imageCID as string)}
        alt={`${props.sender.name} profile picture`}
        className="aspect-square ml-2 w-1/6 rounded-full border-2 border-transparent bg-gradient-to-br from-primary to-secondary bg-clip-border object-cover"
      />
      <div className="truncate h-full justify-between flex flex-1 flex-col px-4 py-2">
        <div className="flex justify-between">
          <h3 className="text-xl font-semibold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {props.sender.name}
          </h3>
          <p className="text-front text-opacity-50">
            {new Date(props.chat.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex justify-between w-full">
          <p className="truncate font-light">{props.chat.text}</p>
          {props.chat.unread && (
            <div className="h-full aspect-square bg-secondary rounded-full ml-3 flex justify-center items-center text-front font-bold">
              !
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
