import { useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DealsTab from "./DealsTab";
import NavigationTabs from "./NavigationTabs";
import NftsTab from "./NftsTab";

export default function UserDashboard() {
  const [currentTab, setCurrentTab] = useState("Pending Deals");
  const tabs = [
    "Pending Deals",
    "Rejected Deals",
    "Completed Deals",
    "NFTs",
    "Settings",
  ];

  const dummyDeals = [
    {
      counterParty: "Epic Devs",
      amount: 80,
      royalty: 5,
      imageUrl:
        "https://i.pinimg.com/736x/31/54/be/3154be740af7c92e7e6137e23cf95880.jpg",
    },
    {
      counterParty: "Papa ki Dukan",
      amount: 20,
      royalty: 60,
      imageUrl:
        "https://elitemen.com.au/wp-content/uploads/2021/08/Visa-NFT-main.jpg",
    },
    {
      counterParty: "Chchodry ki tapri",
      amount: 80,
      royalty: 5,
      imageUrl:
        "https://uploads-ssl.webflow.com/5d8b8e1a530827a377adfa29/61befe03c5e111052d39dbc3_Confidential%20Cats%20NFT%20Review%20Teaser%203.jpeg",
    },
    {
      counterParty: "Marsian inc.",
      amount: 83,
      royalty: 69,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/75de90135789505.61ee65ffebeae.jpg",
    },
    {
      counterParty: "Mummy ki Dukan",
      amount: 20,
      royalty: 70,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/58d09402db29d660e4781a57/1619307661156-633A64D5QIIDUAGOUPEJ/culture_cryptocurrency.png",
    },
  ];

  const dummyNfts = [
    {
      id: 0,
      name: "EminemCon",
      quantity: 9,
      imageUrl:
        "https://variety.com/wp-content/uploads/2017/10/eminem.jpg?w=681&h=383&crop=1",
    },
    {
      id: 1,
      name: "JohnWicky",
      quantity: 3,
      imageUrl:
        "https://cdn.vox-cdn.com/thumbor/Dc8bBshDmxtKUCeTFovjt_pz_bM=/0x0:1777x999/1200x800/filters:focal(708x235:992x519)/cdn.vox-cdn.com/uploads/chorus_image/image/63756879/parabellumcover.0.jpg",
    },
    {
      id: 2,
      name: "BillieEyelash",
      quantity: 80,
      imageUrl:
        "https://external-preview.redd.it/aw5qykqjkyizl9zMO70cEvhT8pA2wE0Vuu4l0FiEhHg.jpg?auto=webp&s=e86b6d30a5eb327bb65bb3ab336fe742484ccde1",
    },
    {
      id: 3,
      name: "Spandan",
      quantity: 9,
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  ];

  return (
    <>
      <Navbar />
      {/* <div className="h-10"></div> */}
      <div className="p-page h-screen flex">
        <div className="absolute top-[25%] -left-[10%] w-[60vw] h-[50vh] rounded-full rotate-45 bg-gradient-to-r -z-[1] pointer-events-none from-primary to-secondary opacity-10 blur-[6rem]"></div>
        <div className="absolute top-[25%] -left-[10%] w-[60vw] h-[50vh] rounded-full -rotate-45 bg-gradient-to-r -z-[1] pointer-events-none from-blue-600 to-pink-500 opacity-10 blur-[6rem]"></div>
        <div className="h-full">
          <NavigationTabs tabs={tabs} setCurrentTab={setCurrentTab} />
        </div>
        {(() => {
          switch (currentTab) {
            case tabs[0]:
              return <DealsTab deals={dummyDeals.slice(0, 2)} />;
              break;
            case tabs[1]:
              return <DealsTab deals={dummyDeals.slice(2, 5)} />;
              break;
            case tabs[2]:
              return <DealsTab deals={dummyDeals.slice(0, 1)} />;
              break;
            case tabs[3]:
              return <NftsTab nfts={dummyNfts} />;
              break;
            case tabs[4]:
              return <DealsTab deals={dummyDeals.slice(0, 5)} />;
              break;

            default:
              break;
          }
        })()}
      </div>
      <Footer />
    </>
  );
}
