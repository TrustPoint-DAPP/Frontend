import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import Navbar from "../../components/Navbar";
import { API_BASE_URL } from "../../constants";
import { AuthContext } from "../../context";
import { Celeb, Message, Organization } from "../../interfaces/Database";
import Chat from "./components/Chat";
import ChatsPanel from "./components/ChatsPanel";

export default function Messages() {
  const authContext = useContext(AuthContext);

  const [isConnected, setIsConnected] = useState(false);
  const [selectedSender, setSelectedSender] = useState<
    Organization | Celeb | null
  >(null);
  const [messages, setMessages] = useState<
    (Message & { celeb: Celeb; org: Organization })[]
  >([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    const socket = io(API_BASE_URL, {
      extraHeaders: { token: authContext.token as string },
    });
    setSocket(socket);
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("message", (message) => {
      console.log(message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    (async () => {
      let messages = [];
      if (selectedSender) {
        console.log(selectedSender);
        const { data } = await axios.get(
          `${API_BASE_URL}/chat/${selectedSender.id}`,
          {
            headers: { Authorization: `Bearer ${authContext.token}` },
          }
        );
        messages = data.messages;
      }
      console.log(messages);
      setMessages(messages);
    })();
  }, [selectedSender]);

  const [chats, setChats] = useState<
    (Message & { celeb: Celeb; org: Organization })[]
  >([]);

  useEffect(() => {
    (async () => {
      const {
        data: { messages },
      } = await axios.get(`${API_BASE_URL}/chat/`, {
        headers: { Authorization: `Bearer ${authContext.token}` },
      });
      setChats(messages);
    })();
  }, []);

  function sendTextMessage(message: string) {
    socket?.emit("new_message", message);
  }

  // const dummy = {
  //   id: 0,
  //   name: "Aaroh Puppu",
  //   imageUrl:
  //     "https://icon-library.com/images/default-user-icon/default-user-icon-20.jpg",
  //   lastMessageAt: "15/02/2023",
  //   latestMessage: "Bhai khana de de aaj to bhi",
  //   unread: false,
  // },
  // {
  //   id: 1,
  //   name: "Jain Sanghatan",
  //   imageUrl:
  //     "https://pyxis.nymag.com/v1/imgs/654/1f1/08de774c11d89cb3f4ecf600a33e9c8283-24-keanu-reeves.rsquare.w700.jpg",
  //   lastMessageAt: "16/02/2023",
  //   latestMessage:
  //     "Kapde ki NFT se hume dur rakho, sin sin sin, fuck jebus, YAAYY We Rule fuck",
  //   unread: true,
  // },
  // {
  //   id: 2,
  //   name: "Churdhuru",
  //   imageUrl:
  //     "https://img.freepik.com/premium-vector/illustration-rajasthani-man-with-greet-hand_194552-833.jpg?w=2000",
  //   lastMessageAt: "14/02/2023",
  //   latestMessage: "Pake Ped pe Paka Papita, Paka Ped ya Paka Papita?",
  //   unread: true,
  // },

  return (
    <div className="overflow-hidden relative">
      <Navbar />
      <div className="w-[50vw] h-[80vh] absolute -z-[2] top-24 -left-[20vw] blur-3xl rounded-full bg-gradient-to-tr from-primary via-cyan-700 to-secondary opacity-10"></div>
      <div className="w-[40vw] h-[70vh] absolute -z-[2] bottom-5 -right-[20vw] blur-3xl rounded-full bg-gradient-to-br from-pink-500 via-blue-400 to-secondary opacity-10"></div>
      {chats.length ? (
        <div className="h-screen flex p-page flex-col">
          <div className="h-24 w-full" />
          <div className="flex border-x border-front border-opacity-20 flex-1">
            <ChatsPanel
              setSelectedSender={setSelectedSender}
              selectedSender={selectedSender}
              chats={chats}
            />
            <Chat
              messages={messages}
              userType={authContext.userType as "ORG" | "CELEB"}
              selectedUser={selectedSender?.name || null}
            />
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col text-center justify-center items-center text-front italic text-2xl gap-y-3 font-light">
          you have no messages <br />
          please initiate a chat first <br />
          <Link
            to="/celebrities"
            className="my-4 border-b border-primary font-extralight tracking-tighter duration-300 hover:border-opacity-0"
          >
            click here to see all available celebs to chat with
          </Link>
        </div>
      )}
    </div>
  );
}
