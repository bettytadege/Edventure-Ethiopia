import React from 'react'
import Universities from '../universities/Universities'
import Text from './Text'
import Student from './Student'

function EdvantureDetails() {
  return (
   <>
   <div className="bg-[#001084]">
    
   <div className="grid lg:flex  md:grid-cols-3 md:gap-6 sm:grid-cols-1 sm:gap-12 lg:justify-around gap-12 pt-32 mx-8  justify-center">
  <Universities />
  <Universities />
  <Universities />
</div>
    <Text/>
    <Student/>
   </div>
   
   </>
  )
}

export default EdvantureDetails
