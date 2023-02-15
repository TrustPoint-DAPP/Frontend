import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingBubblesBackground from "../../components/FloatingBubblesBackground";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const organizationInputs: InputsProps = {
  items: [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your organization's name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your business email",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      placeholder: "Describe your organization",
      required: true,
      minLength: 100,
      maxLength: 250,
      rows: 5,
    },
  ],
};

const CelebrityInputs: InputsProps = {
  items: [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      placeholder: "I am a...",
      required: true,
      minLength: 100,
      maxLength: 250,
      rows: 5,
    },
  ],
};

const inputsTransitionDuration = 200; //in ms

function Auth() {
  const [inputsArray, setInputsArray] =
    useState<InputsProps>(organizationInputs);

  const authPanel = useRef() as React.MutableRefObject<HTMLDivElement>;
  const organizationPanelContainer =
    useRef() as React.MutableRefObject<HTMLDivElement>;
  const celebrityPanelContainer =
    useRef() as React.MutableRefObject<HTMLDivElement>;

  const navigate = useNavigate();

  async function connectMetamaskasync() {
    alert("YASH AB ISKO LIKHEGA");
  }

  function changePanelContainer(container: HTMLElement) {
    //move the floaty hover background
    const state = Flip.getState(authPanel.current);
    container.appendChild(authPanel.current);
    Flip.from(state, {
      duration: (inputsTransitionDuration * 2) / 1000,
      absolute: true,
      ease: "elastic.out(1,1)",
    });
  }

  return (
    <section className="h-screen flex flex-col overflow-hidden">
      <div className="-z-[1] absolute top-0 left-0 w-full h-full blur-[8rem]">
        {" "}
        <FloatingBubblesBackground />{" "}
      </div>
      <div className="p-page py-4 flex justify-between items-center bg-[#0000001E] backdrop-blur-3xl">
        <button
          className="flex items-center top-6 left-6 px-6 py-4 bg-primary bg-opacity-10 rounded-2xl duration-300 hover:bg-opacity-80"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            src="/icons/back.svg"
            alt="close-icon"
            className="w-8 mr-5 aspect-square brightness-0 invert"
          />
          <p>BACK</p>
        </button>
        <div className="flex justify-center items-center gap-x-16">
          {[
            {
              title: "I'm an organization",
              inputs: organizationInputs,
              panelContainer: organizationPanelContainer,
            },
            {
              title: "I'm an influencer",
              inputs: CelebrityInputs,
              panelContainer: celebrityPanelContainer,
            },
          ].map((btn) => (
            <button
              onClick={() => {
                setTimeout(() => {
                  setInputsArray(btn.inputs);
                }, inputsTransitionDuration / 3);
                changePanelContainer(btn.panelContainer.current);
              }}
              className={`${
                inputsArray == btn.inputs ? "underline" : "italic"
              }`}
            >
              {btn.title}
            </button>
          ))}
        </div>
        <div className="w-36" />
      </div>
      <div className="flex flex-1">
        <div
          className="basis-1/2 flex justify-center items-center"
          ref={organizationPanelContainer}
        >
          <div
            className="flex w-max flex-col items-center backdrop-blur-3xl shadow-xl bg-gray-800 bg-opacity-20 rounded-4xl py-12 gap-y-6"
            ref={authPanel}
          >
            <form
              className="flex flex-col gap-y-12 px-14"
              onSubmit={(event) => {
                event.preventDefault();
                connectMetamaskasync();
              }}
            >
              <div className="border-b border-front pb-4 w-full text-2xl pr-[10vw]">
                Connect via MetaMask
              </div>
              <Inputs items={inputsArray.items} />
              <button className="btn-4 px-8 py-2 w-max self-center font-mono text-xl rounded-full flex items-center gap-x-3 duration-300 hover:bg-primary hover:bg-opacity-40 hover:text-front">
                {" "}
                <img
                  src="/icons/metamask.svg"
                  alt="metamask-icon"
                  className="aspect-square w-[3ch]"
                />{" "}
                CONNECT{" "}
              </button>
            </form>
          </div>
        </div>
        <div
          className="basis-1/2 flex justify-center items-center"
          style={{
            transition: `transform : ${inputsTransitionDuration}ms, filter : ${inputsTransitionDuration}ms`,
          }}
          ref={celebrityPanelContainer}
        ></div>
      </div>
    </section>
  );
}

interface InputsProps {
  items: {
    name: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    rows? : number;
  }[];
}

function Inputs(props: InputsProps) {
  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <div ref={containerRef} className="flex flex-col gap-y-12">
      {props.items.map((item) => {
        const Element = item.type === "textarea" ? "textarea" : "input";
        return (
          <Element
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            minLength={item.minLength}
            maxLength={item.maxLength}
            required={item.required || false}
            rows = {item.rows}
            className="bg-transparent resize-none border border-front border-opacity-80 rounded-lg py-2 px-4 placeholder:text-front placeholder:text-opacity-60"
          />
        );
      })}
    </div>
  );
}

export default Auth;
