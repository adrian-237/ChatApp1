import { useEffect } from "react";
import ChatMainHeader from "./chat-main-header";
import ChatIllustration from "./chat-illustration";

import Conversation from "./../data/chat-conversations.json";

export default function ChatMainSection({
  isConversationActive,
  conversationID,
}) {
  useEffect(() => {
    console.log("ConversationID updated:", conversationID);
  }, [conversationID]);

  const conversation = Conversation.find((conv) => conv.id === conversationID);
  const contact = conversation && conversation.contact[0];

  return (
    <div className="chat-main-section">
      {isConversationActive && (
        <ChatMainHeader
          name={contact && contact.name}
          image={contact && contact.img}
        />
      )}
      {!isConversationActive && (
        <div className="chat-main-section-content">
          <ChatIllustration />
          <h2>Keep your device connected</h2>
        </div>
      )}
    </div>
  );
}
