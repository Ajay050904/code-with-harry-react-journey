import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /* 
  // use of ref case is re-render krne per a ki value vapas se 0 nhi hogi ab
  const a = useRef(0);
  useEffect(()=>{
    a.current = a.current + 1;
    console.log(`rendering and the value of a is ${a.current}`);
    });
  */

  const btnRef = useRef();

  useEffect(() => {
    console.log(`First rendering..`);
    btnRef.current.style.backgroundColor = "red";
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        onClick={() => {
          btnRef.current.style.display = "none"; 
        }}
      >
        Change me
      </button>
    </>
  );
}

export default App;
