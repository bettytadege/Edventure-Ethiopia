import React from 'react'

function TestimonialCard() {
  return (
   <>
    <div className="relative -top-[365px]">
    <div className="rounded-3xl  w-12 h-12 relative right-6 top-16  overflow-hidden">
        <img src={testimony} alt="" />
        </div>
      <div className="max-w-[500px] bg-white rounded-2xl px-10  mt-10">
        
        <div className="flex flex-col gap-4 py-8 ">
          <div className="text-xl text-[#6a6a6a] font-semibold ">
              <p>
              “On the Windows talking painted pasture yet its express parties use.
              Sure last upon he same as knew next. Of believed or diverted no.”
              </p>
          </div>
          <div className="flex flex-col ">
            <span className='text-[#ff480f] font-semibold'>Yonzzone Bst</span>
            <span className='opacity-70'>West Beach Bathers Pavilion</span>
          </div>
        </div>
        </div>
      </div> 

   
   </>
  )
}

export default TestimonialCard
