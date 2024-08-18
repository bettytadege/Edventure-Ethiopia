import React from 'react'
import Button from '../Button/Button'
import Link from '../links/Link'
import Register from '../Register/Register';

function NavBar() {
  return (
    <>
      <div className=" ">
        <ul className="  gap-7  md:w-full  hidden md:flex ">
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
          <li>
            <Register/>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar
