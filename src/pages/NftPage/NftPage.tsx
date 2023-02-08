import React from "react";
import { useParams } from "react-router-dom";

export default function NftPage() {
  const { id } = useParams();
  return <div>NftPage for NFT #{id}</div>;
}
