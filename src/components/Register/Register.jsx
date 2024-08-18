import React from 'react'
import Link from '../links/Link'
import Button from '../Button/Button';

function Register() {
  return (
    <>
      <div className="">
        <Link >
          <Button
            className={`bg-[#001084] py-3 px-9 rounded-md  text-center  text-white font-semibold hover:bg-blue-900 `}
          >
            Register
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Register
