import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card1 from "../../components/Card1";
import { useState } from "react";
import RegisterModal from "../../components/RegisterModal";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const promotionCards = [
    {
      image: "/images/brand-promotional-illustration-1.png",
      title: "Zero-Trust Policy",
      description:
        "Game Houses don't trust influencers/celebs. Celebs don't trust Game houses. You don't trust us. We don't trust you. Yet, we are all able to come together and make a deal by harnessing the zero trust powers of web 3 technologies.",
      link: "https://blockbuild.africa/the-concept-of-blockchain-in-zero-trust/",
    },
    {
      image: "/images/brand-promotional-illustration-2.png",
      title: "Unbeatable Security",
      description:
        "In no way can your deals be interacted with by someone other than you and you only. Security is our utmost concern and it should be yours as well. We've considered all possibilities and made a developed marketplace for all parties.",
      link: "https://blockbuild.africa/the-concept-of-blockchain-in-zero-trust/",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="hero relative p-page flex widescreen:min-h-screen">
        <img
          src="/images/hero-gradient.png"
          alt="hero-gradient"
          className="absolute top-0 left-0 w-full h-full object-cover object-right-top -z-10"
        />
        <div className="hero-left basis-1/2 flex flex-col justify-center gap-y-8">
          <div className="bg-front bg-opacity-[0.08] w-max py-2 px-5 text-xl font-medium text-front rounded-md text-opacity-80">
            THE FIRST GAME HOUSE
          </div>
          <h1 className="text-7xl font-semibold">
            The Intuitive Deal mediator
          </h1>
          <p className="text-xl text-front text-opacity-80">
            Trustpoint is a high-security Web 3 Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est id neque molestiae cumque quia nam
            assumenda voluptates tenetur sunt beatae! Nihil magni explicabo quas
            blanditiis voluptatum quod quos accusamus obcaecati praesentium!
          </p>
          <div className="flex items-center gap-x-10">
            <Link className="btn-2 px-4 py-2" to="/auth">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-right basis-1/2"></div>
      </section>
      <section className="p-page relative">
        <h1 className="text-5xl font-semibold">
          Your Deals on{" "}
          <span className="text-gradient-to-r from-primary to-secondary">
            The Web3
          </span>
        </h1>
        <p className="w-7/12 py-5 opacity-70 text-lg font-light">
          How a deal is made with web3 and the experiences you get will
          determine your impact. Utility, ease of trade, and negotiation are
          key. Trustpoint is built with a set of features that make this
          possible.
        </p>
        <div className="flex flex-wrap justify-between py-16">
          {promotionCards.map((card) => {
            return (
              <Card1
                className="max-w-[48%]"
                key={promotionCards.indexOf(card)}
                image={card.image}
                title={card.title}
                description={card.description}
                interaction="Learn More"
                link={card.link}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
