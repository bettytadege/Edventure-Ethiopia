import React from 'react'

function Testimonial() {
  return (
   <>
   <div className="bg-[#001084]  w-full h-[430px] p-16   ">
      <h1 className='text-5xl text-white font-semibold'>Testimonials</h1>
      <div className="overflow-hidden">
        <div className="relative  top-20 left-56">
        <svg width="966" height="418" viewBox="0 0 966 418" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_1)"><path d="M966 237.328H865.686C865.686 161.759 804.5 100.47 729.011 100.47C653.521 100.47 592.314 161.738 592.314 237.328H492C492 106.267 598.124 0 729.011 0C859.897 0 966 106.267 966 237.328Z" fill="#FF480F"></path><path d="M966 326.31V418L729.011 301.557L492 418V326.31L729.011 209.867L966 326.31Z" fill="#FF480F"></path></g><g clip-path="url(#clip1_0_1)"><path d="M474 237.328H373.686C373.686 161.759 312.5 100.47 237.011 100.47C161.521 100.47 100.314 161.738 100.314 237.328H0C0 106.267 106.124 0 237.011 0C367.897 0 474 106.267 474 237.328Z" fill="#FF480F"></path><path d="M474 326.31V418L237.011 301.557L0 418V326.31L237.011 209.867L474 326.31Z" fill="#FF480F"></path></g><defs><clipPath id="clip0_0_1"><rect width="474" height="418" fill="white" transform="translate(492)"></rect></clipPath><clipPath id="clip1_0_1"><rect width="474" height="418" fill="white"></rect></clipPath></defs></svg>
        </div>
        </div>

        <div className="md:flex justify-center  gap-8 mx-auto sm:block overflow-visible">
        <TestimonialCard/>
        <TestimonialCard/>
        </div>
       
       
      </div>
      <div className="bg-[#ff480f] w-full md:h-[450px] text-white overflow-hidden md:pt-44 sm:pt-96 sm:h-[700px]">
        <div className=" flex flex-col gap-10 px-8 ">
        <span className='text-6xl font-semibold'>Partner</span>
        <p className='text-xl '>Edventure Ethiopia is a leading provider of international education services, dedicated to igniting potential, unlock-ing opportunities, and shaping brighter futures for Ethiopian students. With a deep understanding of the Ethiopian context, a proven track record of success, and a unwavering commitment to student success, Edventure Ethiopia has established itself as a trusted partner for Ethiopian youth seeking international education. opportunities.</p>
        </div>
      </div>
   
   </>
  )
}

export default Testimonial
