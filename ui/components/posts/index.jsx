import React, { useEffect, useState } from 'react';

export default function Posts({ user }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const filterPost = post.filter((e) => e.userId === user.id);

  return (
    <div>
      {filterPost.map((post) => (
        <div className="border-b px-4 py-5 hover:bg-gray-100 hover:cursor-pointer">
          <div className="text-lg font-bold mb-2">{post.title}</div>
          <div className="text-base text-gray-500">{post.body}</div>
        </div>
      ))}
    </div>
  );
}
