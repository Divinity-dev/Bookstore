/* eslint-disable import/extensions */
/* eslint-disable react/jsx-key */
import './Books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const { Books } = useSelector((state) => state.Book);
  const Booklist = Books.map((book) => (
    <Book book={book} />
  ));
  return (
    <div>
      {
      Booklist
    }
      <Form />
    </div>

  );
}

export default Books;
