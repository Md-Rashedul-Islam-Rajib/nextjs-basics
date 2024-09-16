import Image from 'next/image';
import React from 'react'

const Details =async ({params}: {params : {id:string}}) => {
    let photo;
    try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
        const res = await data.json();
        photo= res;
    } catch (error:any) {
        throw new Error(error)
    }
    console.log(photo)
  return (
    <div>
      <Image 
      alt=''
      src={photo.url}
      width={400}
      height={400}
      ></Image>
    </div>
  )
}

export default Details
