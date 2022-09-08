import React, { useState } from "react";
import { useGlobalContext } from "../store/User-Context";
import Message from "./Message";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const { user, sendMessage, logoutHandler } = useGlobalContext();

  const submitMessageHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (msg.length === 0) {
      return;
    }
    sendMessage({
      userr: user,
      text: msg,
    });
    setMsg("");
  };

  return (
    <section className="msger">
      <header className="msger-header">
        {user ? (
          <div className="msger-header-title">
            Hello {user?.login.toUpperCase()} !
          </div>
        ) : (
          <></>
        )}
        <div className="msger-header-options">
          <button onClick={logoutHandler}>Log out</button>
        </div>
      </header>
      <Message />

      <form className="msger-inputarea" onSubmit={submitMessageHandler}>
        <input
          type="text"
          className="msger-input"
          placeholder="Enter your message..."
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Chat;
