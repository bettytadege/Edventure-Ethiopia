import React from 'react'
import Link from '../links/Link'
import Register from '../Register/Register';

function NavBar() {
  return (
    <>
      <div className=" ">
        <ul className="flex items-center gap-7">
            <div className="gap-7  md:w-full  hidden md:flex">
          <li className="hover:font-semibold ">
            <Link href={``}>AboutUs</Link>
          </li>
          <li className="hover:font-semibold ">
            <Link href={``}>Program</Link>
          </li>
          <li className="hover:font-semibold">
            <Link href={``}>Blog</Link>
          </li>
          <li className="hover:font-semibold">
            <Link href={``}>ContactUs</Link>
          </li>
          </div>
          <div className='hidden md:flex'> 
            <Register/>
          </div>
        </ul>
      </div>
    </>
  );
}

export default NavBar
