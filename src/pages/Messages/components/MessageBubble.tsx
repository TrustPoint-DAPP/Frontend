import { ethers } from "ethers";
import { Deal, Message, Nft, NFTMetadata } from "../../../interfaces/Database";

interface MessageBubbleProps {
  self: boolean;
  message: Message & {
    deal?: Deal & { nfts: (Nft & { metadata: NFTMetadata })[] };
  };
}

export default function MessageBubble(props: MessageBubbleProps) {
  return (
    <div>
      <div className={`w-full flex justify-between`}>
        <div className={props.self ? "flex" : "hidden"} />
        {(() => {
          switch (props.message.type) {
            case "TEXT":
              return (
                <TextMessageBubble
                  content={props.message.text as string}
                  self={props.self}
                />
              );
            case "DEAL":
              return (
                <DealBubble
                  deal={
                    props.message.deal as Deal & {
                      nfts: (Nft & { metadata: NFTMetadata })[];
                    }
                  }
                />
              );
            case "IMAGE":
              return <></>;
            case "VIDEO":
              return <></>;
          }
        })()}
      </div>
      <p
        className={`text-front text-opacity-25 text-sm font-extralight pt-2 px-2 ${
          props.self ? "text-right" : "text-left"
        }`}
      >
        {new Date(props.message.createdAt).toLocaleString()}
      </p>
    </div>
  );
}

function TextMessageBubble({
  self,
  content,
}: {
  self: boolean;
  content: string;
}) {
  return (
    <div
      className={`max-w-[60%] p-3 rounded-lg ${
        self ? "bg-primary bg-opacity-40" : "bg-tertiary bg-opacity-20"
      }`}
    >
      {content}
    </div>
  );
}

function DealBubble({
  deal,
}: {
  deal: Deal & { nfts: (Nft & { metadata: NFTMetadata })[] };
}) {
  return (
    <div className="w-[50%] overflow-hidden rounded-2xl flex flex-col gap-y-3 bg-foreground">
      <div
        style={{ backgroundImage: deal.nfts[0].metadata.image }}
        key={`${deal.nfts[0].metadata.name} NFT image`}
        className="aspect-square bg-cover flex justify-end"
      >
        <div className="bg-back bg-opacity-50 backdrop-blur-lg px-2 py-2 rounded-full mx-2 mb-3 truncate text-lg font-semibold capitalize">
          {deal.nfts[0].metadata.name}
        </div>
      </div>
      <h2>Deal</h2>
      <p>
        Fixed Fees :{" "}
        <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
          Ξ {ethers.utils.formatEther(deal.oneOffFees)}
        </span>{" "}
      </p>
      <p>
        Royalty :{" "}
        <span className="bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
          {deal.nfts[0].royaltyBasisPoints / 100} %
        </span>{" "}
      </p>
      <button className="btn-1 py-2">ACCEPT</button>
    </div>
  );
}
