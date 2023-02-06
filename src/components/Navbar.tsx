import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Gaming", to: "/gaming" },
    { name: "Deals", to: "/deals" },
    { name: "Popcorn", to: "/popcorn" },
  ];

  return (
    <nav className="p-page z-[100] fixed w-full flex justify-between items-center bg-[#0000001E] text-front py-5 backdrop-blur-3xl">
      <div className="navbar-left">
        <img
          src="/images/brand-name.png"
          alt="brand-name"
          className="h-7"
          draggable="false"
        />
      </div>
      <div className="navbar-mid flex gap-x-16">
        {navLinks.map((link) => {
          return (
            <Link
              to={link.to}
              key={link.to}
              className="opacity-70 duration-300 hover:opacity-100"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="navbar-right flex gap-x-6">
        <button>
          <img
            src="https://www.svgrepo.com/show/353655/discord-icon.svg"
            alt="discord-icon"
            className="h-7 brightness-0 invert opacity-70 hover:opacity-100 hover:scale-105 duration-300"
          />
        </button>
        <button className="bg-primary py-1 px-8 rounded-xl font-medium text-lg text-back duration-500 hover:bg-secondary">
          Join now
        </button>
      </div>
    </nav>
  );
}
