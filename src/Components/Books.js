/* eslint-disable react/jsx-key */
import './Books.css';
import Book from './Book';
import Form from './Form';

function Books() {
  const Books = [{ author: 'suzane colins', title: 'The hunger games' }, { author: 'Chinua Achebe', title: 'Things fall apart' }];
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
