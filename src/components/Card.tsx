import React, { useState } from 'react'



function Card({item,handleClick,id}:any) {

  return (
    <div onClick={()=> handleClick(id)} className='h-[125px] w-[125px] flex items-center justify-center bg-slate-100 rounded-lg a ' >
      <img className='h-[40%] w-[40%] transform '  src={item.img} alt="" />
    </div>
  )
}

export default Card