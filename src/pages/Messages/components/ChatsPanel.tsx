import { useState } from "react";
import ChatItem from "./ChatItem";

interface ChatsPanelProps {
  chats: {
    id: number;
    name: string;
    imageUrl: string;
    lastMessageAt: string;
    latestMessage: string;
    unread: boolean;
  }[];
}

export default function ChatsPanel(props: ChatsPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-1/3 flex flex-col scrollbar-primary">
      <div className=" bg-front bg-opacity-30 flex">
        <img
          src="/icons/search.svg"
          alt="search-icon"
          className="brightness-0 invert w-9 aspect-square p-2"
        />
        <input
          type="text"
          className="flex-1 border-none bg-transparent focus:outline-none"
          placeholder="Search"
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
      </div>
      {props.chats
        .filter((chat) =>
          chat.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((chat) => {
          return <ChatItem key={chat.id} chat={chat} />;
        })}
    </div>
  );
}
