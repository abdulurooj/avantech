import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleLogin = async () => {
  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("user", data.username);
      alert("Login successful");
    }

  } catch (error) {
    console.log(error);
    alert("Error connecting to server");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-80 transition-all duration-500">

        <h2 className="text-2xl font-bold text-center text-pink-500">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-4 p-2 rounded bg-gray-800"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-3 p-2 rounded bg-gray-800"
        />

        {!isLogin && (
          <input
            type="text"
            placeholder="Username"
            className="w-full mt-3 p-2 rounded bg-gray-800"
          />
        )}

        <button
  onClick={handleLogin}
  className="w-full mt-5 bg-pink-600 py-2 rounded hover:scale-105 transition"
>
  Login
</button>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center mt-4 text-sm cursor-pointer text-gray-400"
        >
          {isLogin
            ? "Don't have an account? Signup"
            : "Already have an account? Login"}
        </p>

      </div>
    </div>
  );
}

export default Login;