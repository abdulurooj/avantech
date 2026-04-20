import React, { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", bot: true }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { text: input, bot: false };
    let botReply = "I can help with products, orders, and pricing.";

    if (input.toLowerCase().includes("price")) {
      botReply = "Prices are shown on product page 👍";
    }

    setMessages([...messages, userMsg, { text: botReply, bot: true }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 bg-blue-600 p-3 rounded-full"
      >
        🤖
      </button>

      {open && (
        <div className="fixed bottom-36 right-6 w-72 bg-black border p-3 rounded">
          <div className="h-40 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className={msg.bot ? "text-green-400" : "text-white"}>
                {msg.text}
              </div>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full mt-2 p-1 text-black"
          />

          <button onClick={sendMessage} className="bg-pink-500 w-full mt-1">
            Send
          </button>
        </div>
      )}
    </>
  );
}

export default ChatBot;