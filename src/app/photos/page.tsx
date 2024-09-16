// import Card from '@/components/Card';
import getPhoto from '@/lib/getPhoto'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Photos = async () => {

    const data = await getPhoto();
type Photo = 
{
"albumId": number;
"id": number;
"title": string;
"url": string;
"thumbnailUrl": string;
}

  return (
    <div>
      {
        data.map((photo: Photo)=> <div key={photo.id}>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    <Image
      alt=""
      src={photo.url}
      className="h-56 w-full object-cover"
      height={400}
      width={400}
    />
  
    <div className="bg-white p-4 sm:p-6">
      <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>
  
      <a href="#">
        <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
      </a>
  
      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
        mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
        dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </article>

  <Link href={`/photos/${photo.id}`}>
  <button> go to photo</button>
  </Link>
      </div>)
      }
    </div>
  )
}

export default Photos
