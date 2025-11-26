import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";

const SearchBook = ({ books }) => {
  const [searchState, setSearchState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const nameSearch = searchParams.get("book");

  const navigate = useNavigate();

  useEffect(() => {
    const results = books.filter((book) => {
      return book.name.toLowerCase().includes(nameSearch.toLowerCase());
    });
    console.log(results);
    setSearchState(results);
  }, [books]);

  const clearSearch = () => {
    setSearchState([]);
    navigate("/");
  };

  return (
    <div>
      <h3>Search results</h3>
      {searchState.length > 0 ? (
        <div className="booksContainer">
          {searchState.map((book) => {
            return (
              <div className="book">
                <Link to={`/books/${book.id}`}>
                  <h1>{book.name}</h1>
                </Link>
                <p>{book.description}</p>
                <p>Price: {book.price}</p>
                <p>Rating: {book.rating}/5</p>
                <img src={book.image} />
              </div>
            );
          })}
        </div>
      ) : (
        <h4>No results :( </h4>
      )}

      <button
        onClick={() => {
          clearSearch();
        }}
      >
        Clear Search
      </button>
    </div>
  );
};

export default SearchBook;
