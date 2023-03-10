/* eslint-disable camelcase */
import './Form.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/Books/Bookslice';

function Form() {
  const dispatch = useDispatch();
  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const handletitle = (e) => {
    settitle(e.target.value);
  };
  const handleauthor = (e) => {
    setauthor(e.target.value);
  };
  const item_id = uuidv4();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id,
      title,
      author,
      category: 'Action',
    }));
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
