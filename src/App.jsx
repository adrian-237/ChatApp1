import { useState } from "react";
import ChatAside from "./components/chat-aside";
import ChatMainSection from "./components/chat-main-section";
import "./App.css";

import ChatLayout from "./components/chat-layout";

function App() {
  return (
    <>
      <ChatLayout aside={<ChatAside />} main={<ChatMainSection />}></ChatLayout>
    </>
  );
}

export default App;