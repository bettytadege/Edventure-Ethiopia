import React from 'react'
import Card from '../card/Card'
import congracape from "../../assets/congar.png"
function Universities() {
  return (
    <>
      <Card className={`bg-white rounded-3xl lg:w-80 md:w-64 w-80 `}>
        <div className="  flex flex-col  ">
          <div
            className="bg-[#ff480f] rounded-full w-36 h-36 object-fill 
        flex items-center justify-center relative  -top-10 mx-auto"
          >
            <img src={congracape} className="lg:w-[100px] w-[100px] md:w-[70px] " alt="..." />
          </div>
          <div className="text-center ">
            <p className="font-bold lg:text-9xl text-9xl md:text-7xl text-[#ff480f]">54+</p>
            <h6 className="text-4xl py-3">universities</h6>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Universities
