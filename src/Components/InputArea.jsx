export default function Input(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => props.onInput(event)}
        name="item"
        value={props.InputItem}
        type="text"
      />
      <button onClick={() => props.onAdd()}>
        <span>Add</span>
      </button>
    </div>
  );
}
