"use client"
import { getPosts } from '@/lib/getComment';
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
        const data = await getPosts();
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
