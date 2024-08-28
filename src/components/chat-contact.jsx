export default function ChatContact({
  id,
  image,
  name,
  last_message,
  last_message_time,
  onClick,
}) {
  return (
    <div onClick={onClick} className="chat-contact">
      <div className="chat-contact-data">
        <img src={image} />
        <div className="chat-contact-info">
          <div className="chat-contact-name">{name}</div>
          <div className="chat-contact-message">{last_message}</div>
        </div>
      </div>
      <div className="chat-contact-message-time">{last_message_time}</div>
    </div>
  );
}
