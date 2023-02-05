import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="hero p-page flex widescreen:min-h-screen">
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
            <Link to={"/login"} className="btn-2 px-4 py-2">
              Trustpoint
            </Link>
          </div>
        </div>
        <div className="hero-right basis-1/2"></div>
      </section>
      <section className="p-page">
        <h1 className="text-5xl font-semibold">
          Your Deals on{" "}
          <span className="text-gradient-to-r from-primary to-secondary">
            The Web3
          </span>
        </h1>
      </section>
      <Footer />
    </>
  );
}
