import { useState } from "react";

function App() {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  function login() {

    if(user=="admin" && pass=="1234"){
      setMsg("Login Successful");
    }
    else{
      setMsg("Invalid Login");
    }

  }

  return (

    <div>

      <h2>Login</h2>

      <input
      type="text"
      placeholder="Username"
      onChange={(e)=>setUser(e.target.value)}
      />

      <br /><br />

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPass(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

      <p>{msg}</p>

    </div>

  );

}

export default App;