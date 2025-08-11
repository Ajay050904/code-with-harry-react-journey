import "./App.css";

function App() {
  const handleClick = () => {
    alert("Hey I am clicked");
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick()}>Click me</button>
      </div>
    </>
  );
}

export default App;
