import './Categories.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesslice';

function Categories() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{categories[0]}</h3>
      <button type="submit" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
}

export default Categories;
