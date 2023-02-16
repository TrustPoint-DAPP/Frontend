import { useState } from "react";
import Navbar from "../../components/Navbar";
import Chat from "./components/Chat";
import ChatsPanel from "./components/ChatsPanel";

export default function Messages() {
  const [chats, setChats] = useState([
    {
      id: 0,
      name: "Aaroh Puppu",
      imageUrl:
        "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
      lastMessageAt: "15/02/2023",
      latestMessage: "Bhai khana de de aaj to bhi",
      unread: false,
    },
    {
      id: 1,
      name: "Jain Sanghatan",
      imageUrl:
        "https://pyxis.nymag.com/v1/imgs/654/1f1/08de774c11d89cb3f4ecf600a33e9c8283-24-keanu-reeves.rsquare.w700.jpg",
      lastMessageAt: "16/02/2023",
      latestMessage:
        "Kapde ki NFT se hume dur rakho, sin sin sin, fuck jebus, YAAYY We Rule fuck",
      unread: true,
    },
    {
      id: 2,
      name: "Churdhuru",
      imageUrl:
        "https://img.freepik.com/premium-vector/illustration-rajasthani-man-with-greet-hand_194552-833.jpg?w=2000",
      lastMessageAt: "14/02/2023",
      latestMessage: "Pake Ped pe Paka Papita, Paka Ped ya Paka Papita?",
      unread: true,
    },
  ]);
  const [messages, setMessages] = useState<{}[]>();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="h-screen flex p-page flex-col">
        <div className="h-24 w-full" />
        <div className="flex border border-front border-opacity-20 flex-1">
          <ChatsPanel chats={chats} />
          <Chat />
        </div>
      </div>
    </div>
  );
}
