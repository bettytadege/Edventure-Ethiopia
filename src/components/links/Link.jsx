import React from 'react'

function Link({children,className,href}) {
  return (
    <div>
      <a href={href} className={className}>
        {children}
      </a>
    </div>
  )
}

export default Link
