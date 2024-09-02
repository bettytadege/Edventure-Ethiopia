import React from 'react'

function ScholarshipCard({img,text1,text2,num,bgcolora}) {
  return (
  <>
  <div className=" lg:max-w-[660px] bg-[#f4f4f4] rounded-3xl py-14 shadowscholar ">
        <div className=" flex justify-end mr-10">
          <img src={img} alt="" />
        </div>
        <div className="px-16 ">
        <div className="flex flex-col gap-6 font-semibold">
          <span className="text-4xl">{num}</span>
          <p className="text-4xl text-[#ff480f] font-semibold">{text1}</p>
          <p className="text-[#949494] text-xl font-light ">
            {text2}
          </p>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default ScholarshipCard
