import React from 'react'
import logo from "../../assets/edventure.jpg"
function Logo() {
  return (
    <>
      <div className="w-[175px] h-[48px]   ">
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:hidden lg:hidden sm:flex justify-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="none"
          viewBox="0 0 510 511"
          id="menu"
        >
          <path
            fill="#000"
            fill-rule="evenodd"
            d="M356 181H156V166H356V181zM356 256H156V241H356V256zM356.004 331H156.004V316H356.004V331z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Logo
