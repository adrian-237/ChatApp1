import { useState } from "react";
import ChatAside from "./components/chat-aside";
import ChatMainSection from "./components/chat-main-section";
import ChatModal from "./components/chat-modal";
import "./App.css";

import ChatLayout from "./components/chat-layout";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isConversationActive, setIsConversationActive] = useState(false);
  const [conversationID, setConversationID] = useState(null);

  return (
    <>
      {isModalActive && <ChatModal setIsModalActive={setIsModalActive} />}
      <ChatLayout
        isModalActive={isModalActive}
        aside={
          <ChatAside
            setIsModalActive={setIsModalActive}
            setIsConversationActive={setIsConversationActive}
            setConversationID={setConversationID}
          />
        }
        main={
          <ChatMainSection
            key={conversationID}
            isConversationActive={isConversationActive}
            conversationID={conversationID}
          />
        }
      ></ChatLayout>
    </>
  );
}

export default App;
