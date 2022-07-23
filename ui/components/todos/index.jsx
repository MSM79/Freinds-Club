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
        <div className="border-b px-4 py-3">
          <div className="font-medium mb-2"> {todo.title}</div>
          <div className="uppercase text-gray-400">
            {todo.completed ? 'Completed' : 'Not Completed'}
          </div>
        </div>
      ))}
    </div>
  );
}
