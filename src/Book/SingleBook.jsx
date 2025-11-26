import { useParams, Link } from "react-router";

function SingleBook({ books }) {
  const { id } = useParams();

  const singleBook = books.find((book) => {
    return book.id === id * 1;
  });

  if (!singleBook) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleBook">
      <h2>{singleBook.title}</h2>
      <p>{singleBook.author}</p>
      <p>{singleBook.description}</p>
      <img src={singleBook.coverimage} />
      <div>
        <Link to="/">Back to all Books</Link>
      </div>
    </div>
  );
}

export default SingleBook;
