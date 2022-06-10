import React from 'react';
import "./Todo.css"
import { FiTrash } from 'react-icons/fi';

const Todo = ({todo, deleteTodo, doneTodo}) => {
  return (
    <li>
      <label className="todo-item" style={todo.done ? {textDecoration: "line-through"} : null} >
          <div>
            <input type="checkbox" checked={todo.done} onClick={() => doneTodo(todo.id)}/>
            <span>{todo.text}</span>
          </div>
          <div className="todo-item-delete" onClick={() => deleteTodo(todo.id)}>
              <FiTrash/>
          </div>
      </label>
    </li>
  );
};

export default Todo;