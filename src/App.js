import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';
import Books from './Components/Books';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
      <Form />
    </div>
  );
}

export default App;
