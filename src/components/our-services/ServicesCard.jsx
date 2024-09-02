import React from 'react'

function ServicesCard(props) {
  return (
    <>
            <div className="max-w-[410px] flex flex-col items-center gap-16 mb-28">
        <div className="">
            {/* <img src={props.img} alt="" /> */}
       <svg class=" text-white " aria-hidden="true" width="100" height="100" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 4h3c.6 0 1 .4 1 
        1v15c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V5c0-.6.4-1 1-1h3m0 3h6m-3 5h3m-6 0h0m3 4h3m-6 0h0m1-13v4h4V3h-4Z"></path></svg>
        </div>
            <div className="flex  gap-6">
        <span className='text-[#ff480f]  text-4xl font-bold'>{props.num}</span>
        <div className="text-white flex flex-col gap-4 text-4xl font-semibold" >
            
            <p className=''>{props.text1}</p>
            <div className="text-white font-light text-xl ">
            <p>{props.text2}</p>
        </div>
        </div>
       
        </div>
        </div>
    
    
    </>
  )
}

export default ServicesCard
