import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Signup successful");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-xl w-80">
        <h2 className="text-xl mb-4">Signup</h2>

        <input placeholder="Username" onChange={(e)=>setUsername(e.target.value)} className="w-full p-2 mb-2 text-black" />
        <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 mb-2 text-black" />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 mb-4 text-black" />

        <button onClick={handleSignup} className="bg-pink-600 w-full py-2 rounded">
          Signup
        </button>
      </div>
    </div>
  );
}