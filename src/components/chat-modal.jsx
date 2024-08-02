import CloseModalSVG from "./close-modal-svg";

export default function ChatModal() {
  return (
    <div className="chat-modal">
      <div className="chat-modal-header">
        <p>Start a new conversation</p>
        <div className="close-modal">
          <CloseModalSVG className="close-modal-svg" />
        </div>
      </div>
    </div>
  );
}
