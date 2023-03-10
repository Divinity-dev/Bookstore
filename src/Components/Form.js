/* eslint-disable camelcase */
import './Form.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/Books/Bookslice';

function Form() {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const { Books } = useSelector((state) => state.Book);
  const handletitle = (e) => {
    settitle(e.target.value);
  };
  const handleauthor = (e) => {
    setauthor(e.target.value);
  };
  const item_id = `item${Books.length + 1}`;
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ item_id, author, title }));
    setauthor('');
    settitle('');
  };
  return (
    <form onSubmit={(e) => handlesubmit(e)}>
      <div>
        <input value={title} placeholder="Book title" className="input1" onChange={(e) => handletitle(e)} />
      </div>
      <input value={author} placeholder="author" className="input2" onChange={(e) => handleauthor(e)} />
      <button type="submit">Add book</button>
    </form>
  );
}

export default Form;
