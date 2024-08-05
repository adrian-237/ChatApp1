import ChatModalContact from "./chat-modal-contact";
import contacts from "./../data/chat-contacts.json";

export default function ChatModalContactList() {
  return (
    <div className="chat-modal-contact-list">
      {contacts.map((contact) => (
        <ChatModalContact
          key={contact.id}
          name={contact.name}
          image={contact.img}
        />
      ))}
    </div>
  );
}
