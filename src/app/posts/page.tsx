"use client"
import React, { useEffect, useState } from 'react'

interface Post{
    'userId' : number;
    'id' : number;
    'title' : string;
    'body' : string;
}


const Post = () => {
    const [posts, setPosts] = useState([]);
    const data = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
    }

    useEffect(()=>{
        data();
    },[])


  return (
    <div>
      {
        posts.map((post : Post) => ( <div key={post.id}>{post.title}</div>))
      }
    </div>
  )
}

export default Post;
