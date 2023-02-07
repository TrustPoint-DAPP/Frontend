import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DealsTab from "./DealsTab";
import NavigationTabs from "./NavigationTabs";

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
        "https://elitemen.com.au/wp-content/uploads/2021/08/Visa-NFT-main.jpg",
    },
  ].slice(0, 5);

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
        {dummyDeals && dummyDeals.length && <DealsTab deals={dummyDeals} />}
      </div>
      <Footer />
    </>
  );
}
