import Button from '@/components/button'
import React from 'react'

const page = ({params}: {params : {id : string}}) => {
  return (
    <div>
      cloth id : {params.id}
      <Button />
    </div>
  )
}

export default page
