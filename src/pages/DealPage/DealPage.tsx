import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Placeholder from "../../components/Placeholder";

interface Deal {
  id: number;
  nft: {
    id: number;
    name: string;
    quantity: number;
    imageUrl: string;
  };
  amount: number;
  royalty: number;
}

export default function DealPage() {
  const { id } = useParams();

  const [dealData, setDealData] = useState({
    id: null,
    nft: {
      id: null,
      name: null,
      quantity: null,
      imageUrl: null,
    },
    amount: null,
    royalty: null,
  });

  useEffect(() => {
    setTimeout(() => {
      setDealData({
        id: 0,
        nft: {
          id: 1,
          name: "Avatar NFT",
          quantity: 3,
          imageUrl:
            "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DE40E88CFA65CA2BE5A206038D74438668411C72AAB6D17AA32837D2F08C0F86/scale?width=506&aspectRatio=2.00&format=jpeg",
        },
        amount: 80,
        royalty: 5,
      });
    }, 2000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-20 w-full"></div>
      <section id="NFT-overview" className="p-page flex">
        <div className="basis-1/3 aspect-square">
          {dealData.nft.imageUrl ? (
            <img
              src={dealData.nft.imageUrl}
              alt={`${dealData.nft.name} NFT image`}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <Placeholder />
          )}
        </div>
        <div className="basis-2/3 flex flex-col pl-6">
          <h2 className="">
            {dealData.nft.name ? dealData.nft.name : <Placeholder />}
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
}
