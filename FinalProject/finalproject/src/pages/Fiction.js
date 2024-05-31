import { useState, useEffect } from 'react';
const APIURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Tdg0jGGpcZn1ydjogoOAZgQ7u4s8yb81';


export const Fiction = () => {
    const [books, setBooks] = useState([]);
    const [expandedBook, setExpandedBook] = useState(null);
 
    useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(APIURL);
          const data = await response.json();
          setBooks(data.results.books);
      };
      fetchData();
    }, []);
 
    const toggleExpandedBook = (isbn) => {
      setExpandedBook(isbn === expandedBook ? null : isbn);
    };
 
    return (
      <div>
        <h1>Current Bestselling Fiction Books</h1>
        <ol>
          {books.map(book => (
            <li key={book.primary_isbn10}>
              <div onClick={() => toggleExpandedBook(book.primary_isbn10)}>
                <strong>{book.title}</strong> by {book.author}
              </div>
              {expandedBook === book.primary_isbn10 && (
                <div>
                  <p>Rank: {book.rank}</p>
                  <p>Rank last week: {book.rank_last_week}</p>
                  <p>Publisher: {book.publisher}</p>
                  <p>Description: {book.description}</p>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }
 