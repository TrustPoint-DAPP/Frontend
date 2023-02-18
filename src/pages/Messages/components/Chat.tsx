import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { API_BASE_URL } from "../../../constants";
import { AuthContext } from "../../../context";
import { Celeb, Message, Organization } from "../../../interfaces/Database";
import DealCreationModal from "./DealCreationModal";
import MessageBubble from "./MessageBubble";

interface ChatProps {
  messages: (Message & { celeb: Celeb; org: Organization })[];
  userType: "ORG" | "CELEB";
  selectedSender: Organization | Celeb | null;
  sendTextMessage: Function;
}

export default function Chat(props: ChatProps) {
  const authContext = useContext(AuthContext);
  // const [currentChat, setCurrentChat] = useState(
  //   [
  //     { content: "Mummy ka payra dush", self: true, datetime: "12/12/2022" },
  //     {
  //       content:
  //         "Mummy ka payra lorem ipsum dolor sit garad popcorn kachra kachra lol lorem ipsum dolor sit garad popcorn kachra kachra lol",
  //       self: false,
  //       datetime: "13/12/2022",
  //     },
  //     {
  //       content:
  //         "humara badla to mera baap lega to mai kya karu mai jaake khana khau? job chod du fir? yahi chahte ho na, sab samajh raha hu mai",
  //       self: true,
  //       datetime: "15/12/2022",
  //     },
  //     {
  //       content:
  //         "yarr ye chat lambi kaise banau kuch samajh nahi aa rha ab jo bhi bakwas dimag me ayegi mai likhte jaane vala hu ab faraq nahi padta mujhe at this point, thoda sa bhi faraq nahi pad raha ab tp kuch bhi likh raha hu mai",
  //       self: false,
  //       datetime: "17/12/2022",
  //     },
  //     {
  //       content:
  //         "Mummy ka payra lorem ipsum dolor sit garad popcorn kachra kachra lol lorem ipsum dolor sit garad popcorn kachra kachra lol",
  //       self: false,
  //       datetime: "13/12/2022",
  //     },
  //     {
  //       content:
  //         "humara badla to mera baap lega to mai kya karu mai jaake khana khau? job chod du fir? yahi chahte ho na, sab samajh raha hu mai",
  //       self: true,
  //       datetime: "15/12/2022",
  //     },
  //     {
  //       content:
  //         "humara badla to mera baap lega to mai kya karu mai jaake khana khau? job chod du fir? yahi chahte ho na, sab samajh raha hu mai",
  //       self: true,
  //       datetime: "15/12/2022",
  //     },
  //     {
  //       content:
  //         "yarr ye chat lambi kaise banau kuch samajh nahi aa rha ab jo bhi bakwas dimag me ayegi mai likhte jaane vala hu ab faraq nahi padta mujhe at this point, thoda sa bhi faraq nahi pad raha ab tp kuch bhi likh raha hu mai",
  //       self: false,
  //       datetime: "17/12/2022",
  //     },
  //   ].slice(0, 4)
  // );

  const messageBox = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [showDealCreationModal, setShowDealCreationModal] = useState(false);

  async function createDeal(data: FormData) {
    if (!props.selectedSender) return;
    data.append("celebId", props.selectedSender.id.toString());
    const {
      data: { signature, nonce, metadataCID },
    } = await axios.post(`${API_BASE_URL}/deal/`, data, {
      headers: { Authorization: `Bearer ${authContext.token}` },
    });
  }

  return (
    <>
      <div className="flex-1 h-full flex flex-col border-front border-l border-opacity-20">
        <div className="py-2  text-lg font-medium tracking-wider italic text-center bg-foreground text-front">
          {props.selectedSender?.name || "Please select a chat"}
        </div>
        <div className="h-[75vh] flex flex-col p-3 gap-y-6 overflow-y-scroll scrollbar-primary">
          {props.messages.map((message) => (
            <MessageBubble
              content={message.text as string}
              datetime={new Date(message.createdAt).toLocaleString()}
              self={
                message.sender.toLowerCase() === props.userType.toLowerCase()
              }
              key={message.id}
            />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.sendTextMessage(
              props.selectedSender?.id,
              messageBox.current.value
            );
            messageBox.current.value = "";
          }}
          className="flex p-3 gap-x-2 backdrop-blur-lg border-t border-front border-opacity-30"
        >
          <button
            className="btn-2 px-4 py-2"
            onClick={() => {
              setShowDealCreationModal(true);
            }}
          >
            <img
              src="/icons/doc.svg"
              alt="deal icon"
              className="brightness-0 invert aspect-square w-5 mr-2"
            />
            Deal
          </button>
          <input
            type="text"
            accept="image/*"
            className="flex-1 rounded-xl px-2 focus:outline-none"
            ref={messageBox}
            placeholder="Type a message"
          />
          <button type="submit" className="btn-1 bg-opacity-50 rounded-lg">
            <img
              src="/icons/send.svg"
              alt="send message button"
              className="brightness-0 invert px-2 w-12 object-cover"
            />
          </button>
        </form>
      </div>
      <DealCreationModal
        show={showDealCreationModal}
        setShow={setShowDealCreationModal}
        actionButton={createDeal}
      />
    </>
  );
}
