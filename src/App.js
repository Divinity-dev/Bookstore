import './App.css';
import { Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import Books from './Components/Books';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
