import React from 'react'
import friend from "../../assets/friends.jpeg"
function Student() {
  return (
   <>
    <div className="grid md:grid-cols-2 mx-10 sm:grid-cols-1 pt-16">
  <div className="max-w-[490px] hidden md:block ">
    <img src={friend} alt="" />
  </div>
  <div className="text-white text-pretty  text-xl mt-4">
    <p>
  At Edventure Ethiopia, we understand the importance of accessing
            global educational opportunities. We specialize in guiding students
            towards international education and are committed to providing
            unparalleled support to ensure your success.
            <br /> <br />
            
             
              Discover how partnering with us can empower you towards achieving
              your academic aspirations! <br /><br />
           
            Edventure Ethiopia is a leading provider of international education
            services, dedicated to igniting potential, unlock-ing opportunities,
            and shaping brighter futures for Ethiopian students. With a deep
            understanding of the Ethiopian context, a proven track record of
            success, and a unwavering commitment to student success, Edventure
            Ethiopia has established itself as a trusted partner for Ethiopian
            youth seeking international education. opportunities.
            </p>
  </div>
      </div>
   
   </>
  )
}

export default Student
