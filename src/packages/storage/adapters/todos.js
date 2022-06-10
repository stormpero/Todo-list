import {
  setItem,
  getItem,
  removeItem
} from "../storage";

const setTodoList = (todoList) => {
  setItem("todolist", JSON.stringify(todoList));
}

const getTodoList = () => {
  const list = getItem("todolist");
  return list ? JSON.parse(list) : [];
}

const removeTodoList = () => {
  removeItem("todolist")
}

export {
  setTodoList,
  getTodoList,
  removeTodoList
}