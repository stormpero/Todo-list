import './App.css';
import TodoList from "../TodoList/TodoList";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "Todo List"
  });

  return (
      <TodoList/>
  );
}

export default App;
