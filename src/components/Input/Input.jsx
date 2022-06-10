import React, {useState} from 'react';
import "./Input.css"

export const Input = ({addTodo}) => {
  const [valueInput, setValueInput] = useState("");
  const onChange = (event) => setValueInput(event.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && valueInput.trim() !== "") {
      addTodo(valueInput.trim());
      setValueInput("");
    }
  }

  return (
    <input className="todo-list-input"
           value={valueInput}
           onChange={onChange}
           onKeyDown={handleKeyDown}
           placeholder="Например: Сходить в магазин..."
    />
  );
};
