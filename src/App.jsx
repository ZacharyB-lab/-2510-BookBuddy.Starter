function App() {
  return (
    <div className="app">
      <nav>
        <img id="logo-image" src="books.png" />
        <a href="#">Welcome</a>
        <div className="spacer"></div>
        <a href="#">Books</a>
        <a href="#">Log In</a>
      </nav>
      <h1>List of Books</h1>
      <div>
        <input placeholder="Search for a book..."></input>
        <button>Search</button>
      </div>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use some state in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
    </div>
  );
}

export default App;
