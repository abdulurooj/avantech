import React from "react";

function Contact() {
  return (
    <div className="text-center mt-20">

      <h2 className="text-3xl font-bold">Contact Us</h2>

      <input placeholder="Name" className="block m-2 p-2" />
      <input placeholder="Email" className="block m-2 p-2" />

      <button className="bg-purple-600 px-4 py-2 mt-2">
        Send
      </button>

    </div>
  );
}

export default Contact;