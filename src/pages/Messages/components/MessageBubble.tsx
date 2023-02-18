interface MessageBubbleProps {
  content: string;
  self: boolean;
  datetime: string;
}

export default function MessageBubbleProps(props: MessageBubbleProps) {
  return (
    <div>
      <div className={`w-full flex justify-between`}>
        <div className={props.self ? "flex" : "hidden"} />
        <div
          className={`max-w-[60%] p-3 rounded-lg ${
            props.self
              ? "bg-primary bg-opacity-40"
              : "bg-tertiary bg-opacity-20"
          }`}
        >
          {props.content}
        </div>
      </div>
      <p
        className={`text-front text-opacity-25 text-sm font-extralight pt-2 px-2 ${
          props.self ? "text-right" : "text-left"
        }`}
      >
        {props.datetime}
      </p>
    </div>
  );
}
