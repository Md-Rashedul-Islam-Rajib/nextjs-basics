import Image from 'next/image';
import React from 'react'

const Details =async ({params}: {params : {id:string}}) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);
    const photo = await data.json();
    console.log(photo)
  return (
    <div>
      <Image 
      alt=''
      src={url}
      ></Image>
    </div>
  )
}

export default Details
