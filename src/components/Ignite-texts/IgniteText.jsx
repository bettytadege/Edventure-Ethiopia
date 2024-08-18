import React from 'react'
import Button from '../Button/Button'
function IgniteText() {
  return (
    <>
      <div className="mt-10 flex container flex-col md:flex-row overflow-hidden">
        <div className="flex flex-col gap-8 ml-10 md:w-full">
          <div className="lg:text-[72px] text-[#001084] leading-tight font-bold md:text-[64px] md:w-full sm:text-6xl ">
            <p className="">
              <span className="text-[#ff480f] lg:text-[72px] font-bold md:text-[64px]">
                Ignite
              </span>{" "}
              your potential.
            </p>
            <p>Explore the world.</p>
          </div>
          <div className="text-gray-600 mt-8 text-balance flex m:text-center">
            <p className="">
              At Edventure Ethiopia, we're committed to being your ally in
              realizing your international academic ambitions. Trust us to guide
              you towards a world of endless possibilities!
            </p>
          </div>
          <div className="">
            <Button
              className={`bg-[#001084] py-3 px-14 rounded-md  text-center  text-white font-semibold hover:bg-blue-900  w-fit`}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default IgniteText
