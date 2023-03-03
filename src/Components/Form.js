import './Form.css';

function Form() {
  return (
    <form>
      <div>
        <input placeholder="Book title" className="input1" />
      </div>
      <input placeholder="author" className="input2" />
      <button type="submit">Add book</button>
    </form>
  );
}
export default Form;
