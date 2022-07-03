import {useState, useEffect, useCallback} from "react";

import {todos} from "../packages/storage";
import uuid from "react-uuid";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    setTodoList(todos.getTodoList());
  }, [])

  useEffect(() => {
    if (todoList.length)
      todos.setTodoList(todoList);
  }, [todoList])

  const addTodo = (text) => {
    setTodoList([...todoList, {
      id: uuid(),
      text,
    }]);
  }

  const deleteTodo = useCallback((id) => {
    setTodoList(prevList => prevList.filter(el => el.id !== id))
  }, [])

  const doneTodo = useCallback((id) => {
    setTodoList(prevList => prevList.map(el => {
      if (el.id === id) {
        el.done = !el.done;
      }
      return el;
    }))
  }, [])

  return {
    todoList,
    addTodo,
    deleteTodo,
    doneTodo,
  }
}