
import React, { useEffect, useState } from "react";
import axios from '../api/axios';


function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {posts.map((post) => (
        <div key={post._id} style={{ borderBottom: "1px solid #ccc", marginBottom: "1rem" }}>
          <p><strong>{post.author?.name || "Unknown"}</strong></p>
          <p>{post.content}</p>
          <small>{new Date(post.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

export default PostList;
