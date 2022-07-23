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
        <div className="mb-4 bg-gray-200">
          <p>user id : {post.userId}</p>
          <p>id: {post.id}</p>
          <div> Post Title : {post.title}</div>
          <div> Post Body : {post.body}</div>
        </div>
      ))}
    </div>
  );
}
