import { ethers } from "ethers";
import { Deal, Nft, NFTMetadata } from "../../../interfaces/Database";
import { getIPFSImageURL } from "../../../utils/getIPFSImageURL";

interface MessageBubbleProps {
  content: string;
  self: boolean;
  datetime: string;
}

export default function MessageBubble(props: MessageBubbleProps) {
  return (
    <div>
      <div className={`w-full flex justify-between`}>
        <div className={props.self ? "flex" : "hidden"} />
        {(() => {
          //switch
          return <></>;
        })()}
      </div>
      <p
        className={`text-front text-opacity-25 text-sm font-extralight pt-2 px-2 ${
          props.self ? "text-right" : "text-left"
        }`}
      >
        {props.datetime}
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
