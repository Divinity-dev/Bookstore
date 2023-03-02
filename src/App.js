import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from './react-router-dom';
import Categories from './Categories';
import Books from './Books'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Books" element={<Books />} />
        <Route path="/catergories" element={<Categories />} />
      </Routes>
     
    </div>
  );
}

export default App;
