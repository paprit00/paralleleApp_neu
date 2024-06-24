import React from 'react';

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(todo)}>Delete</button>
    </li>
  );
};

export default TodoItem;
