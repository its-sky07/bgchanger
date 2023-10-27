import React, { useState } from 'react'

const Changer = () => {
   const [color, setcolor]= useState()
  return (
    <>
    <div className='h-screen w-full flex justify-center text-center relative'style={{backgroundColor: color}}>
      <div  className='  w-auto  shadow-xl  flex  flex-wrap absolute bottom-10  m-4 rounded-2xl   gap-3 p-3 bg-white font-black flex flex-wrap bottom-1 '>
       <button 
       onClick={()=> setcolor("red")} className='p-3 rounded-2xl bg-red-800'>red</button>
       <button  onClick={()=> setcolor("green")} className='p-3 rounded-2xl bg-green-800'>green</button>
       <button onClick={()=> setcolor("blue")} className='p-3 rounded-2xl bg-blue-800'>blue</button>
       <button onClick={()=> setcolor("yellow")} className='p-3 rounded-2xl bg-yellow-400'>yellow</button>
       <button onClick={()=> setcolor("purple")} className='p-3 rounded-2xl bg-purple-600'>purple</button>
       <button onClick={()=> setcolor("pink")} className='p-3 rounded-2xl bg-pink-500'>pink</button>
       <button onClick={()=> setcolor("orange")} className='p-3 rounded-2xl  bg-orange-600'>orange</button>
       <button onClick={()=> setcolor("gray")} className='p-3 rounded-2xl bg-gray-500'>gray</button>
       

       
      </div>

    </div>

    </>
  )
}

export default Changer