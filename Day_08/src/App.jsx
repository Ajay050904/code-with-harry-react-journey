import { useState } from "react";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  // const [name, setName] = useState("MAHAM");
  const [form, setForm] = useState({ email: "", phone: "" });

  const handleClick = () => {
    alert("Hey I am clicked");
  };

  // const handleMouseOver = () => {
  //   alert("Hey I am a mouse over");
  // };

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className="red" onMouseOver={handleMouseOver}>
        I am a red div
      </div> */}

      {/* <input type="text" value={name} onChange={handleChange} /> */}

      <input
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      {/* to add defalut value -->     const [form, setForm] = useState({}) */}
      {/* <input
        type="text"
        name="phone"
        value={form.phone? form.phone:"0000000"}
        onChange={handleChange}
      /> */}
    </>
  );
}

export default App;
