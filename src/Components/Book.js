import { PropTypes } from 'prop-types';

function Book({ book }) {
  const { title, author } = book;
  return (
    <div className="Books">
      <div className="B1">
        <h4>Action</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="comps">
          <h3>comments</h3>
          <h3>remove</h3>
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
  }).isRequired,
};
export default Book;
