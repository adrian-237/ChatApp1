import ChatMainHeader from "./chat-main-header";
import ChatIllustration from "./chat-illustration";
export default function ChatMainSection() {
  return (
    <div className="chat-main-section">
      {false && <ChatMainHeader />}
      {true && (
        <div className="chat-main-section-content">
          <ChatIllustration />
          <h2>Keep your device connected</h2>
        </div>
      )}
    </div>
  );
}
