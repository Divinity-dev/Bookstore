/* eslint-disable no-unused-vars */
import './Navbar.css';
import { Link } from 'react-router-dom';
import Person from './download.png';

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          Bookstore CMS
        </li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="./Categories">Categories</Link>
        </li>
      </ul>
      <img className="person" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="Person" />
    </div>
  );
}
export default Navbar;
