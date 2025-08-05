import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Hey! Welcome to My Page");
  }, []);

  useEffect(() => {
    alert("Count was changed");
  }, [count]);
  return <></>;
}

export default App;
