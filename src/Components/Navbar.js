import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <li>
                    Bookstore CMS
                </li>
                
                <li>
                    <a href='./Books'>Books</a>
                    
                </li>
                
                <li>
                <a href='./Categories'>Categories</a>
                    
                </li>
            </ul>
            <img src="./download.png" alt="Person" />

        </div>
    )
}
export default Navbar;
