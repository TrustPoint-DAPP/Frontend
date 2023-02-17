import React from "react";
import Navbar from "../../components/Navbar";
import CelebrityCard from "./components/CelebrityCard";

const celebs = [
  {
    id: 0,
    name: "Harchar",
    imageUrl:
      "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Screenshot-2021-12-10-at-01.10.07-1001x1024.png",
  },
  {
    id: 1,
    name: "mamamia",
    imageUrl:
      "https://nftevening.com/wp-content/uploads/2022/05/Lil-Baby-DeadFellaz-3439.png",
  },
  {
    id: 2,
    name: "Benjamin Franklin president america dollar bill",
    imageUrl: "https://miro.medium.com/max/800/0*Lqp2aRnUlqvtU6a1.jpg",
  },
  {
    id: 3,
    name: "Smile man",
    imageUrl:
      "https://cdn.dribbble.com/users/7918221/screenshots/15687097/media/faa6b89a99102844cbc7fa685dee5ea6.jpg?compress=1&resize=400x300&vertical=top",
  },
  {
    id: 4,
    name: "pappu",
    imageUrl:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/19/2539677-rahul-gandhi5.jpg",
  },
  {
    id: 4,
    name: "yarr maar do",
    imageUrl: "https://i.redd.it/i1n8c3eru1d81.jpg",
  },
  {
    id: 5,
    name: "Harchar",
    imageUrl:
      "https://blogs.airdropalert.com/wp-content/uploads/2021/12/Screenshot-2021-12-10-at-01.10.07-1001x1024.png",
  },
  {
    id: 6,
    name: "mamamia",
    imageUrl:
      "https://nftevening.com/wp-content/uploads/2022/05/Lil-Baby-DeadFellaz-3439.png",
  },
  {
    id: 7,
    name: "Benjamin Franklin president america dollar bill",
    imageUrl: "https://miro.medium.com/max/800/0*Lqp2aRnUlqvtU6a1.jpg",
  },
  {
    id: 8,
    name: "Smile man",
    imageUrl:
      "https://cdn.dribbble.com/users/7918221/screenshots/15687097/media/faa6b89a99102844cbc7fa685dee5ea6.jpg?compress=1&resize=400x300&vertical=top",
  },
  {
    id: 9,
    name: "pappu",
    imageUrl:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/09/19/2539677-rahul-gandhi5.jpg",
  },
  {
    id: 10,
    name: "yarr maar do",
    imageUrl: "https://i.redd.it/i1n8c3eru1d81.jpg",
  },
];

export default function CelebritiesPage() {
  return (
    <div>
      <Navbar />
      <div className="h-24"></div>
      <div className="flex p-page flex-wrap">
        {celebs.map((celeb) => {
          return (
            <>
              {celebs.indexOf(celeb) == 1 && <CelebritiesPageBanner />}
              <CelebrityCard
                key={celeb.id}
                id={celeb.id}
                name={celeb.name}
                imageUrl={celeb.imageUrl}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

function CelebritiesPageBanner() {
  return (
    <div className="w-2/4 flex flex-col justify-evenly items-center pb-8">
      <h1 className="text-[44px] font-semibold tracking-wide">
        Eat, Buy & Sell Celebs
      </h1>
      <p className="font-light tracking-wide text-front text-opacity-70">
        Discover the most recognizer celebs
      </p>
      <button className="bg-gradient-to-r from-teal-700 to-cyan-800 px-10 py-4 rounded-full duration-300 hover:from-primary">
        View Market
      </button>
    </div>
  );
}