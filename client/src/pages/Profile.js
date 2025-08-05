
import React, { useEffect, useState } from "react";
import axios from '../api/axios';

import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await axios.get(`/auth/user/${userId}`);
        const postRes = await axios.get(`/posts/user/${userId}`);
        setUser(userRes.data);
        setPosts(postRes.data);
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchData();
  }, [userId]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <h3>Posts by {user.name}:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
