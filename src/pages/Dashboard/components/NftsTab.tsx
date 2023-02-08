import React from "react";
import PropTypes from "prop-types";
import NftCard from "./NftCard";

interface NftsTabProps {
  nfts: {
    id: number;
    name: string;
    quantity: number;
    imageUrl: string;
  }[];
}

function NftsTab(props: NftsTabProps) {
  return (
    <div className="flex flex-wrap justify-evenly w-full gap-y-8 overflow-y-scroll h-full scrollbar-primary">
      <div className="w-full">
        <div className="w-full h-14"></div>
      </div>
      {props.nfts.map((nft) => (
        <NftCard
          id={nft.id}
          name={nft.name}
          quantity={nft.quantity}
          imageUrl={nft.imageUrl}
        />
      ))}
    </div>
  );
}

// NftsTab.propTypes = {};

export default NftsTab;
