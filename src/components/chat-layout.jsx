import React from "react";

export default function ChatLayout({ aside, main }) {
  return (
    <>
      <div className="chat-layout">
        <div className="aside">{aside}</div>
        <div className="main">{main}</div>
      </div>
    </>
  );
}
