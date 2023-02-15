import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function Navbar() {
  const navLinks = [
    { name: "Gaming", to: "/gaming" },
    { name: "Deals", to: "/deals" },
    { name: "Popcorn", to: "/popcorn" },
  ];

  const navbarLinkHoverBg =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  function navbarLinkHover(link: EventTarget) {
    //move the floaty hover background
    const state = Flip.getState(navbarLinkHoverBg.current);
    (link as HTMLElement).appendChild(navbarLinkHoverBg.current);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,1)",
    });
  }

  return (
    <>
      <nav className="p-page z-[100] fixed w-full flex justify-between items-center bg-[#0000001E] text-front py-5 backdrop-blur-3xl">
        <div className="navbar-left">
          <Link to="/">
            <img
              src="/images/brand-name.png"
              alt="brand-name"
              className="h-7"
              draggable="false"
            />
          </Link>
        </div>
        <div className="navbar-mid flex gap-x-16">
          {navLinks.map((link) => {
            return (
              <Link
                to={link.to}
                key={link.to}
                className="relative opacity-70 duration-300 hover:opacity-100 group"
                onMouseEnter={(event) => {
                  navbarLinkHover(event.target);
                }}
              >
                {link.name}
                {navLinks.indexOf(link) === 0 && (
                  <div
                    className="navbar-link-hover-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-md bg-front opacity-0 -z-[1] group-hover:opacity-10 pointer-events-none"
                    ref={navbarLinkHoverBg}
                  />
                )}
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
          <Link
            to="/auth"
            className="bg-primary py-1 px-8 rounded-xl font-medium text-lg text-back duration-500 hover:bg-secondary"
          >
            Join now
          </Link>
        </div>
      </nav>
    </>
  );
}
