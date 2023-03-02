/* eslint-disable react/jsx-key */
import './Books.css';

function Books() {
  const Books = [{ author: 'suzane colins', title: 'The hunger games' }, { author: 'Chinua Achebe', title: 'Things fall apart' }];
  const Booklist = Books.map((Book) => (
    <div className="Books">
      <div className="B1">
        <h4>Action</h4>
        <h2>{Book.title}</h2>
        <h3>{Book.author}</h3>
      </div>
      <div className="B2">
        <h3>current chapter</h3>
        <h2>chapter 17</h2>
        <button type="button">update process</button>
      </div>
    </div>
  ));
  return (
    <div>
      {
      Booklist
    }
    </div>

  );
}

export default Books;
