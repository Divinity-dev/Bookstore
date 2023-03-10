/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Bookslice';

function Book({ book }) {
  const dispatch = useDispatch();
  const {
    item_id,
    title,
    author,
  } = book;
  return (
    <div id={item_id} className="Books">
      <div className="B1">
        <h4>Action</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="comps">
          <h3>comments</h3>
          <button className="btn" type="button" onClick={() => dispatch(removeBook(item_id))}>remove</button>
          <h3>Edit</h3>

        </div>
      </div>
      <div className="B2">
        <h3>current chapter</h3>
        <h2>chapter 17</h2>
        <button type="button">update process</button>
      </div>
    </div>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};
export default Book;
