import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then((responce) => {
        setQuote(responce.data);
      })
      .catch(() => {
        console.log("Error!");
      })
  };

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  return (
    <div className="App">
      <div className="quote-card">
        <p>{quote}</p>
        <button onClick={fetchQuote}>New Quote</button>
        <button onClick={saveQuote}>Save Quote</button>
      </div>
      <div className="saved-quotes">
        <h2 className='saved-quotes-h2'>Saved Quotes</h2>
        {savedQuotes.map((savedQuote, index) => (
          <div key={index} className="quote-card">
            <p>{savedQuote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
