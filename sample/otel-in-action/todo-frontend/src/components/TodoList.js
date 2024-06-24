import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };

  const addTodo = async (todo) => {
    try {
      await axios.post(`http://localhost:8080/todos/${todo}`);
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo', error);
    }
  };

  const removeTodo = async (todo) => {
    try {
      await axios.delete(`http://localhost:8080/todos/${todo}`);
      fetchTodos();
    } catch (error) {
      console.error('Error removing todo', error);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo} todo={todo} removeTodo={removeTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
