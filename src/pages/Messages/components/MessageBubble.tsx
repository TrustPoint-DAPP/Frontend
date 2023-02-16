interface MessageBubbleProps {
  content: string;
  self: boolean;
  datetime: string;
}

export default function MessageBubbleProps(props: MessageBubbleProps) {
  return <div className="max-w-[80%] truncate">{props.content}</div>;
}
