import React, { useState } from 'react'
import Card from './Card'

function Container() {
  const [items,setItems]= useState([

    { id:1, img: '/Freight.svg', stat:"" },
    { id:1, img: '/Freight.svg', stat:"" },
    { id:2, img: '/globalsearch.svg', stat:"" },
    { id:2, img: '/globalsearch.svg', stat:"" },
    { id:3, img: '/Plane icon.svg', stat:"" },
    { id:3, img: '/Plane icon.svg', stat:"" },
    { id:4, img: '/Starred.svg', stat:"" },
    { id:4, img: '/Starred.svg', stat:"" },
    { id:5, img: '/connectselect.svg', stat:"" },
    { id:5, img: '/connectselect.svg', stat:"" },
    { id:6, img: '/notifications.svg', stat:"" },
    { id:6, img: '/notifications.svg', stat:"" },
    { id:7, img: '/home.svg', stat:"" },
    { id:7, img: '/home.svg', stat:"" },
    { id:8, img: '/Event.svg', stat:"" },
    { id:8, img: '/Event.svg', stat:"" }



  ].sort(()=>Math.random()- 0.5)
  )


function handleClick(id:any) { alert(id)
  
}

  return (
    <div className='h-[100%] w-[100%] justify-center items-center grid grid-cols-4 gap-3'>
      
       {items.map((item,i) =>
        <Card key={i} item={item} id={i} handleClick={handleClick}/>
        )} 

    </div>
  )
}

export default Container