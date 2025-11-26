import { Book } from "./Book/Book";
import "./books.css";
//Link for API books: https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books

export function HomePage({ books }) {
  // return (
  //   <div>
  //     <h1>List of Books</h1>
  //     <div>
  //       <input placeholder="Search for a book..."></input>
  //       <button>Search</button>
  //     </div>
  //     <div className="singlebook">
  //       <img id="book-image" src="books.png" />
  //       <div className="information">
  //         <div className="title">
  //           <Book title="Example Book" />
  //         </div>
  //         <div className="author">JK Rowling</div>
  //         <div>
  //           Here's a description that's of course very long. JK Rowling is a
  //           horrible person that doesn't truly deserve any of the fame and
  //           acclaims that she has earned.
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div className="booksContainer">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <Link
                to={`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${book.id}`}
              >
                <h1>{book.title}</h1>
              </Link>
              <p>{book.author}</p>
              <p>{book.description}</p>
              <img src={book.coverimage} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}
