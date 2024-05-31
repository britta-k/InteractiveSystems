import React, { useState, useEffect } from 'react';

const APIURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Tdg0jGGpcZn1ydjogoOAZgQ7u4s8yb81';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(APIURL);
        const data = await response.json();
        setBooks(data.results.books);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Current Hardcover Fiction Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.primary_isbn10}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;