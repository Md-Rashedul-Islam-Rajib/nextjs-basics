import React from 'react'
import getComments from "../../lib/getComment"
const Comments = async () => {

    type Comments = {
        postId: number;
        id: number;
        name: string;
        email: string;
        body: string;
    }

    const data = await getComments();
   


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
