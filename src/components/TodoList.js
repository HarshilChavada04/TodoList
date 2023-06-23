import { useState } from "react";
import "../App.css";

function TodoList() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [editableIndex, setEditableIndex] = useState(-1);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (text.trim() !== "") {
      setList([...list, { text: text, completed: false }]);
      setText("");
      e.target.reset();
    }
  }

  function handleDelete(index) {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  }

  function handleDeleteAll() {
    setList([]);
  }

  function handleEdit(index) {
    setEditableIndex(index);
  }

  function handleSave(index, value) {
    const updatedList = [...list];
    if (value === "") {
      updatedList.splice(index, 1);
    } else {
      updatedList[index].text = value;
    }
    setList(updatedList);
    setEditableIndex(-1);
  }

  function handleCheckboxChange(e, index) {
    const updatedList = [...list];
    updatedList[index].completed = e.target.checked;
    setList(updatedList);
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">TODOLIST</h1>
      <form onSubmit={handleClick} className="todo-form">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="todo-input"
          onChange={handleChange}
          value={text}
        />
        <button type="submit" className="todo-button">
          +
        </button>
      </form>
      <ul className="todo-list">
        {list.map((item, index) => (
          <li key={index} className={"todo-item"}>
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxChange(e, index)}
              checked={item.completed}
            />
            {editableIndex === index ? (
              <input
                type="text"
                defaultValue={item.text}
                className="todo-item-input"
                onBlur={(e) => handleSave(index, e.target.value)}
              />
            ) : (
              <span
                className={`todo-item-text ${
                  item.completed ? "completed" : ""
                }`}
              >
                {item.text}
              </span>
            )}
            <div className="todo-buttons">
              <button
                className="todo-edit-all"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="todo-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        {list.length > 0 && (
          <button onClick={handleDeleteAll} className="todo-delete-all">
            Delete All
          </button>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
