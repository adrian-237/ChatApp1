import CloseModalSVG from "./close-modal-svg";
import ChatModalContactList from "./chat-modal-contact-list";

export default function ChatModal({ setIsModalActive }) {
  return (
    <div className="chat-modal">
      <div className="chat-modal-header">
        <p>Start a new conversation</p>
        <div className="close-modal" onClick={() => setIsModalActive(false)}>
          <CloseModalSVG className="close-modal-svg" />
        </div>
      </div>
      <ChatModalContactList />
    </div>
  );
}
