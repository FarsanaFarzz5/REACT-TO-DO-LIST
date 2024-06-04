import React, { useState } from 'react';
import ToDoForm from './component/todoform';
import ToDoList from './component/todolist';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([ ...todos, { text: todo, completed: false }]);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <ToDoForm addTodo={addTodo} />
        <ToDoList todos={todos} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;
