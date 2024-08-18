import React from 'react'
import Card from '../card/Card'
import congracape from "../../assets/congar.png"
function Universities() {
  return (
    <>
      <Card className={`bg-white rounded-3xl z-10 w-80`}>
        <div className="  flex flex-col  ">
          <div
            className="bg-[#ff480f] rounded-full w-36 h-36 object-fill 
        flex items-center justify-center relative  -top-10 mx-auto"
          >
            <img src={congracape} className="w-116 " alt="..." />
          </div>
          <div className="text-center ">
            <p className="font-bold text-9xl text-[#ff480f]">54+</p>
            <h6 className="text-4xl py-3">universities</h6>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Universities
