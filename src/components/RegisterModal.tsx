import React, { useState } from "react";

interface RegisterModalProps {
  show: Boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

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
      type: "text",
      placeholder: "Enter a description about your organization",
      required: true,
      minLength: 100,
      maxLength: 250,
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
      type: "text",
      placeholder: "I am a...",
      required: true,
      minLength: 100,
      maxLength: 250,
    },
  ],
};

function RegisterModal(props: RegisterModalProps) {
  async function connectMetamaskasync() {
    alert("YASH AB ISKO LIKHEGA");
  }

  const [inputsArray, setInputsArray] = useState([]);

  const { show, setShow } = props;
  return (
    <div
      className={`${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } flex fixed top-0 left-0 w-full h-full z-[101] justify-center items-center bg-back bg-opacity-10 backdrop-blur-md duration-500`}
    >
      <div className="flex flex-col items-center backdrop-blur-3xl shadow-2xl bg-foreground rounded-4xl p-4 gap-y-6">
        <div className="flex justify-end w-full">
          <button
            className="px-6 py-4 bg-primary bg-opacity-30 rounded-2xl duration-300 hover:bg-opacity-80"
            onClick={() => {
              setShow(false);
            }}
          >
            <img
              src="/icons/close.svg"
              alt="close-icon"
              className="w-8 aspect-square brightness-0 invert"
            />
          </button>
        </div>
        <form
          className="flex flex-col gap-y-12 px-14"
          onSubmit={(event) => {
            event.preventDefault();
            connectMetamaskasync();
          }}
        >
          <div className="border-b border-front py-4 w-full text-2xl pr-[10vw]">
            Connect via MetaMask
          </div>
          <Inputs items={inputsArray} />
          <button className="btn-4 px-8 py-2 w-max self-center font-mono text-xl rounded-full flex items-center gap-x-3 mb-10 duration-300 hover:bg-primary hover:bg-opacity-40 hover:text-front">
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
  }[];
}

function Inputs(props: InputsProps) {
  return (
    <>
      {props.items.map((item) => (
        <input
          type={item.type}
          name={item.name}
          placeholder={item.placeholder}
          minLength={item.minLength}
          maxLength={item.maxLength}
          required={item.required || false}
          className="bg-transparent rounded-full text-xl py-2 px-4"
        />
      ))}
    </>
  );
}

export default RegisterModal;
