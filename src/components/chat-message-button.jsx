import MessageSVG from "./message-svg";

export default function ChatMessageButton({ setIsModalActive }) {
  return (
    <button
      className="message-button"
      onClick={() => {
        setIsModalActive((prev) => !prev);
      }}
    >
      <MessageSVG />
    </button>
  );
}
