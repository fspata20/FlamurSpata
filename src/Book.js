import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import './App.css';

const Book = ({ id, title, author }) => {
  return (
    <div className="book">
      <div className="book-content">
        <FontAwesomeIcon icon={faCopyright} className="book-info-icon" />
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author.map(a => <div>{a.name}</div>)}</p>
        <Link to={`/books/${id}`}>
          <button>View Details</button>
        </Link>
      </div>
    </div>
  );
};



export default Book;
  