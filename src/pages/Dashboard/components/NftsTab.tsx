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
  return <div className="flex flex-wrap"></div>;
}

// NftsTab.propTypes = {};

export default NftsTab;
