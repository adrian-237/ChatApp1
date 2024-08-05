import React from "react";

export default function ChatLayout({ aside, main, isModalActive }) {
  return (
    <>
      <div
        className={`chat-layout ${
          isModalActive ? "chat-layout-modal-active" : ""
        }`}
      >
        <div className="aside">{aside}</div>
        <div className="main">{main}</div>
      </div>
    </>
  );
}
