/* eslint-disable import/extensions */
/* eslint-disable react/jsx-key */
import './Books.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getData } from '../redux/Books/Bookslice';

function Books() {
  const dispatch = useDispatch();
  const { Books } = useSelector((state) => state.Book);
  const Booklist = Books.map((book) => (
    <Book book={book} />
  ));
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
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
