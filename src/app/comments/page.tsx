import React from 'react'

const Comments = async () => {

    type Comments = {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }

    const comments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await comments.json();


  return (
    <div>
      {
        data.map((comment : Comments) => ( <div key={comment.id}>
            {comment.name}
        </div>))
      }
    </div>
  )
}

export default Comments
