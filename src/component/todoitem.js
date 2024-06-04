import React from 'react';

function ToDoItem({ todo, index, removeTodo }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
