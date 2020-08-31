import React, { useState } from "react";
import "./App.css";

//              FUNCTION STARTS HERE
function App() {
  //              REACT HOOKS HERE
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(["a", "b", "c"]);
  const sendMessage = (event) => {
    setMessages([...messages]);
  };

  //              RETURN
  return (
    <div className="App">
      <h1>hello fellows</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}

export default App;
