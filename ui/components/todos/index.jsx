import React, { useEffect, useState } from 'react';

export default function Posts({ user }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const filterTodos = todos.filter((e) => e.userId === user.id);

  return (
    <div>
      {filterTodos.map((todo) => (
        <div className="mb-4 bg-gray-200">
          <p>user id : {todo.userId}</p>
          <p>id: {todo.id}</p>
          <div> Post Title : {todo.title}</div>
          <div> Post Body : {todo.completed ? 'true' : 'false'}</div>
        </div>
      ))}
    </div>
  );
}
