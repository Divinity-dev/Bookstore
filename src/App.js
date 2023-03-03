import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';
import Booklist from './Components/Booklist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Booklist" element={<Booklist />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
