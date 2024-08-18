import React from 'react'

function Button({children,className}) {
  return (
   <>
   <div className={className}>
    <button>{children}</button>
   </div>
   </>
  )
}

export default Button
