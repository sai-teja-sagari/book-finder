import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounced search function
  const searchBooks = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm) {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get(
            `https://openlibrary.org/search.json?title=${searchTerm}`
          );
          console.log(response.data.docs);
          setBooks(response.data.docs || []);
        } catch (err) {
          setError('Error fetching data from Open Library API');
        } finally {
          setLoading(false);
        }
      } else {
        setBooks([]);
      }
    }, 500),
    [] // Ensures the debounced function is created only once
  );

  // Handle search input change
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    searchBooks(searchTerm); // Trigger the debounced search
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleInputChange}
      />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
