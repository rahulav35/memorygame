

import Container from '@/components/Container'
import React from 'react'

function index() {
  return (
    <div className='flex flex-col justify-start items-center p-4 box-border'>
      <h1 className="text-3xl my-4 font-bold font-serif">Memory Game</h1>
      <div className="h-[550px] w-[550px] flex justify-center items-center  bg-orange-800">
        <Container/>

      </div>
    </div>
  )
}

export default index