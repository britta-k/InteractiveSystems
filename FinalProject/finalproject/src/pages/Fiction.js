import { useState, useEffect, useMemo, useCallback } from 'react';
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
 
    const toggleExpandedBook = useCallback((isbn) => {
      setExpandedBook(isbn === expandedBook ? null : isbn);
    }, [expandedBook]);

    const booksWithPositionChanges = useMemo(() => {
      return books.map(book => {
        let positionChange;
        if (book.rank_last_week === 0) {
          positionChange = 'New on the list';
        } else {
          const change = book.rank_last_week - book.rank;
          positionChange = change > 0 ? `Decreased by ${change}` : change < 0 ? `Increased by ${Math.abs(change)}` : 'No change';
        }
        return {
          ...book,
          positionChange
        };
      });
    }, [books]);
 
    return (
      <div>
        <h1>Current Bestselling Fiction Books</h1>
        <ol>
          {booksWithPositionChanges.map(book => (
            <li key={book.primary_isbn10}>
              <div onClick={() => toggleExpandedBook(book.primary_isbn10)}>
                <strong>{book.title}</strong> by {book.author}
                {book.positionChange && <span> - {book.positionChange}</span>}
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
 