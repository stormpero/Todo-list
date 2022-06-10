import React from 'react';
import "./Todos.css"
import Todo from "../Todo/Todo";

export const Todos = ({todoList, deleteTodo, doneTodo}) => {
  return (
    <ul>
      {todoList.map(el => <Todo key={el.id} todo={el} deleteTodo={deleteTodo} doneTodo={doneTodo}/>)}
    </ul>
  );
};
