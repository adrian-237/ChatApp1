export default function ChatMainHeader({ id, image, name }) {
  return (
    <div className="chat-main-header">
      <img src={image} alt="" />
      <div className="contact-name"> {name} </div>
    </div>
  );
}
