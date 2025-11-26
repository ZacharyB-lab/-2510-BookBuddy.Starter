import { useParams, Link, useNavigate } from "react-router";

function SingleBook({ books, deleteBook, user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteAndNav = (id) => {
    deleteBook(id);
    navigate("/books");
  };
  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleBook">
      <h2>{singleBook.name}</h2>
      <p>{singleBook.description}</p>
      <p>Price: {singleBook.price}</p>
      <p>Rating: {singleBook.rating}/5</p>
      <img src={singleBook.image} />
      <button
        onClick={() => {
          deleteAndNav(singleBook.id);
        }}
        disabled={user.id ? false : true}
      >
        Delete Book
      </button>
      <div>
        <Link to="/allBooks">Back to all Books</Link>
      </div>
    </div>
  );
}

export default SingleBook;
