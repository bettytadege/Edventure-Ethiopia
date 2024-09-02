import React from 'react'
import ScholarshipCard from './ScholarshipCard'

function Scholarship() {
  return (
    <>
    <div className="">
    <div className="text-6xl ml-9 text-[#001084] font-semibold">
      <h3>Scholarship Programs</h3>
    </div>
      <div className=" mx-10 grid lg:grid-cols-2 sm:grid-cols-1  gap-8 pt-8">
        <ScholarshipCard
          num="01"
          text1="Fulbright Program"
          text2="Provides scholarships for international students to study in the
            United States at various academic levels."
          img={<svg width="100" height="100" viewBox="0 0 24 24" fill="black">
            <path
              opacity="0.1"
              d="M15 12C15 13.6569 13.6569 15 12 15
            C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              fill="black"
            ></path>
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="black"
              stroke-width="2"
            ></path>
            <path
              d="M12 5V3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 7L19 5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19 12H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 17L19 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19V21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7 17L5 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 12H3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 5L7 7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>}
        />
        <ScholarshipCard
          num="02"
          text1="Commonwealth Scholarships and Fellowships"
          text2="Offers scholarships for students from Commonwealth countries to study in other Commonwealth countries."
          img={`<svg version="1.0" id="Layer_1" width="100" height="100" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><g><circle fill="black" cx="32" cy="14" r="3"></circle><path fill="black" d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17   C33.438,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z    M32,9c2.762,0,5,2.238,5,5s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"></path><rect x="34" y="27" fill="black" width="8" height="25"></rect><rect x="46" y="27" fill="black" width="8" height="25"></rect><rect x="22" y="27" fill="black" width="8" height="25"></rect><rect x="10" y="27" fill="black" width="8" height="25"></rect><path fill="black" d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z"></path><path fill="black" d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"></path></g></svg>`}
        />
      </div>  
      <div className=" mx-10 grid lg:grid-cols-2 sm:grid-cols-1  gap-8 pt-9">
        <ScholarshipCard
          num="01"
          text1="Fulbright Program"
          text2="Provides scholarships for international students to study in the
            United States at various academic levels."
          img={<svg width="100" height="100" viewBox="0 0 24 24" fill="black">
            <path
              opacity="0.1"
              d="M15 12C15 13.6569 13.6569 15 12 15
            C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              fill="black"
            ></path>
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="black"
              stroke-width="2"
            ></path>
            <path
              d="M12 5V3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 7L19 5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19 12H21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17 17L19 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19V21"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7 17L5 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 12H3"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5 5L7 7"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>}
        />
        <ScholarshipCard
          num="02"
          text1="Commonwealth Scholarships and Fellowships"
          text2="Offers scholarships for students from Commonwealth countries to study in other Commonwealth countries."
          img={`<svg version="1.0" id="Layer_1" width="100" height="100" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><g><circle fill="black" cx="32" cy="14" r="3"></circle><path fill="black" d="M4,25h56c1.794,0,3.368-1.194,3.852-2.922c0.484-1.728-0.242-3.566-1.775-4.497l-28-17   C33.438,0.193,32.719,0,32,0s-1.438,0.193-2.076,0.581l-28,17c-1.533,0.931-2.26,2.77-1.775,4.497C0.632,23.806,2.206,25,4,25z    M32,9c2.762,0,5,2.238,5,5s-2.238,5-5,5s-5-2.238-5-5S29.238,9,32,9z"></path><rect x="34" y="27" fill="black" width="8" height="25"></rect><rect x="46" y="27" fill="black" width="8" height="25"></rect><rect x="22" y="27" fill="black" width="8" height="25"></rect><rect x="10" y="27" fill="black" width="8" height="25"></rect><path fill="black" d="M4,58h56c0-2.209-1.791-4-4-4H8C5.791,54,4,55.791,4,58z"></path><path fill="black" d="M63.445,60H0.555C0.211,60.591,0,61.268,0,62v2h64v-2C64,61.268,63.789,60.591,63.445,60z"></path></g></svg>`}
        />
      </div>  
      </div>
    </>
  );
}

export default Scholarship
