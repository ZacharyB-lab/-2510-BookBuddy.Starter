import { Book } from "./Book/Book";

export function HomePage() {
  return (
    <div>
      <h1>List of Books</h1>
      <div>
        <input placeholder="Search for a book..."></input>
        <button>Search</button>
      </div>
      <div className="singlebook">
        <img id="book-image" src="books.png" />
        <div className="information">
          <div className="title">
            <Book title="Example Book" />
          </div>
          <div className="author">JK Rowling</div>
          <div>
            Here's a description that's of course very long. JK Rowling is a
            horrible person that doesn't truly deserve any of the fame and
            acclaims that she has earned.
          </div>
        </div>
      </div>
    </div>
  );
}
