/* eslint-disable no-unused-vars */
import './Navbar.css';
import Person from './download.png';

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          Bookstore CMS
        </li>
        <li>
          <a href="./Books">Books</a>
        </li>
        <li>
          <a href="./Categories">Categories</a>
        </li>
      </ul>
      <img src="Person" alt="Person" />
    </div>
  );
}
export default Navbar;
