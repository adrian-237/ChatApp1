import { useState } from "react";
import ChatAside from "./components/chat-aside";
import ChatMainSection from "./components/chat-main-section";
import ChatModal from "./components/chat-modal";
import "./App.css";

import ChatContact from "./components/chat-contact";

import ChatLayout from "./components/chat-layout";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <>
      {isModalActive && <ChatModal setIsModalActive={setIsModalActive} />}
      <ChatLayout
        isModalActive={isModalActive}
        aside={<ChatAside setIsModalActive={setIsModalActive} />}
        main={<ChatMainSection />}
      ></ChatLayout>
    </>
  );
}

export default App;
