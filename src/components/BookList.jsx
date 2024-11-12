import React from 'react';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book,idx) => <Book key={idx} book={book} />)
      ) : (
        <p>No books found</p>
      )}
    </div>
  );
}

export default BookList;
