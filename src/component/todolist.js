import React from 'react';
import ToDoItem from './todoitem';

function ToDoList({ todos, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDoItem 
          key={index} 
          index={index} 
          todo={todo} 
          removeTodo={removeTodo} 
        />
      ))}
    </ul>
  );
}

export default ToDoList;
