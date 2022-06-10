import React from 'react';
import {Input} from "../Input/Input";
import {Todos} from "../Todos/Todos";
import {useTodoList} from "../../hooks/useTodoList";

import "./TodoList.css";

const TodoList = () => {
  const {todoList, addTodo, deleteTodo, doneTodo} = useTodoList();

  return (
      <section className="todo-list-main">
        <h1>Список дел</h1>
        <Input addTodo={addTodo}/>
        <Todos todoList={todoList} deleteTodo={deleteTodo} doneTodo={doneTodo}/>
      </section>
  );
};

export default TodoList;