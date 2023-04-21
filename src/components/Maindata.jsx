import React from "react";
import icon from "./assets/storm.gif"
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity,WiStrongWind,WiSunrise,WiSunset } from "react-icons/wi";
import { AiOutlineArrowDown,AiOutlineArrowUp } from "react-icons/ai";


function Maindata() {
  return (
    <>


<p className="font-bold p-2 bg-amber-400 text-gray-800 text-[22px] text-center leading-7">
            NOIDA
          </p>
        


      <div className="p-4 sm:p-4">
        <div className="flex flex-col items-center justify-center ">
          <p className="text-grey-700 text-xl font-extralight">
            14 MAY 2022,TUESDAY
          </p>

          <div className=" relative bg-gray-600 w-24 mt-2 rounded-lg shadow-xl">
            <span className=" w-full h-full flex justify-center items-center text-2xl text-white">
              CLEAR
            </span>
          </div>

          <div className="flex flex-row items-center justify-center text-black  py-3">
            <p className="text-5xl mx-20  px-1">18°</p>
           
          </div>

          <div className="flex flex-row items-center justify-center space-x-0.5 text-black text-sm py-3">
            <p className="flex items-center font-light">
           
            <CiTempHigh size={18} />Real fell:
                <span className="font-medium ml-1">17°</span>
                </p>
            <p className="font-light">|</p>

            <p className="flex items-center font-light">
            <WiHumidity size={18} />Humidity:
                <span className="font-medium ml-1">46%</span>
            </p>
            <p className="font-light">|</p>

            <p className=" flex items-center font-light">
            <WiStrongWind size={18} />Wind: 
                <span className="font-medium ml-1">14 km/h</span>
            </p>
           
          </div>



          <div>
       <div>
      <div className=" w-full  flex items-center justify-between mt-2">
        <p className="text-black font-medium uppercase">ADDI. INFO</p>
      </div>
      <hr className="my-1 border-gray-950" />

      <div className="flex  space-x-10 flex-row items-center justify-between text-black">
       

        
          <div className="flex flex-col items-center justify-between">
            <p className="font-light text-sm">Rise</p>
            <img
              src={icon}
              className="w-12 my-1 "
              alt=""
            />
            <p className="font-medium">04:50 AM</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">SET</p>
            <img
              src={icon}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-mediu">06:30 PM</p>
          </div>
 

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">HIGH</p>
            <img
              src={icon}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">12°</p>
          </div>


          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">LOW</p>
            <img
              src={icon}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">12°</p>
          </div>

     
      </div>
    </div>
    </div>




        </div>
      </div>
    </>
  );
}

export default Maindata;
