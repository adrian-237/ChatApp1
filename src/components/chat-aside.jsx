import React from "react";
import ChatSearchbar from "./chat-searchbar";
import ChatConstactList from "./chat-contact-list";
import ChatMessageButton from "./chat-message-button";

export default function ChatAside({
  setIsModalActive,
  setIsConversationActive,
  setConversationID,
}) {
  return (
    <>
      <ChatSearchbar />
      <ChatConstactList
        setIsConversationActive={setIsConversationActive}
        setConversationID={setConversationID}
      />

      <ChatMessageButton setIsModalActive={setIsModalActive} />
    </>
  );
}
