import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await a.json();
    setCards(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='cards'>
        {cards.map(card => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
