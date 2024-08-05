export default function ChatModalContact({ name, image }) {
  return (
    <li className="chat-modal-contact">
      <img src={"." + image} alt="" />
      <div className="name">{name}</div>
    </li>
  );
}
