import React, { useState, useEffect } from "react";
import API from "./api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if(savedUser){
      setUsername(savedUser);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/login", {
        username,
        password
      });

      localStorage.setItem("username", res.data.username);

      navigate("/welcome");

    } catch (err) {

      if(err.response){
        setError(err.response.data.message);
      }

    }
  };

  return (

    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button type="submit">Login</button>

      </form>

      {error && <p style={{color:"red"}}>{error}</p>}

    </div>

  );
}

export default Login;
