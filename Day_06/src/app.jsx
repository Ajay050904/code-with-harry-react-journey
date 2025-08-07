import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setToDOs] = useState([
    {
      title: "Hey",
      desc: "I am a good todo",
    },
    {
      title: "Hi",
      desc: "I am a bad todo",
    },
    {
      title: "Hello",
      desc: "I am both good and bad todo",
    },
  ]);

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border border-1 border-purple-400">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      {/* {showBtn ? <button>I will  be only shown when second button is clicked</button> : "NUll"} */}
      {/* {showBtn &&  <button>showBtn is true</button>} */}
      {/* If we want to use else condition then we will use above method */}
      {showBtn ? (
        <button>showBtn is true</button>
      ) : (
        <button>showBtn is false</button>
      )}

      {/* <Todo /> */}
      {/* To display all todos - for loop */}
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}

      <div class="card">
        <button onClick={() => setShowBtn(!showBtn)}>Toggle show btn</button>
        <p>
          Edit <code>src/app.jsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
