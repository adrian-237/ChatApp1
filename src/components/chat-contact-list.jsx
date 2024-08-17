import ChatContact from "./chat-contact";
import ChatConversations from "./../data/chat-conversations.json";

export default function ChatContactList() {
  return (
    <div className="chat-contact-list">
      {ChatConversations.map((chatItem) =>
        chatItem.contact.map((contact) => (
          <ChatContact
            key={contact.id}
            id={contact.id}
            image={contact.img}
            name={contact.name}
            last_message={contact.last_message}
            last_message_time={contact.last_message_time}
          />
        ))
      )}
    </div>
  );
}
