import { useEffect, useState } from "react";
import {getWeatherData} from './data/Weatherapi';
import {getWeatherDataloc} from './data/Weatherapi';
import ReactLoading from 'react-loading';
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity,WiStrongWind} from "react-icons/wi";
import visiblity from "./assets/visiblity.gif"
import pressure from "./assets/pressure.gif"
import sunrise from "./assets/sunrise.gif"
import sunset from "./assets/sunset.gif"
import { DateTime } from "luxon";



function App() 
{
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('delhi');
  const [loading, setLoading] = useState(false);
  const[databyloc,setDatabyloc]=useState(false);

  function getdatasearch(){
    setDatabyloc(false)
      getData();
  }
  
const getData = async () => {
    try{
        setLoading(true);
        
        const data = (databyloc==false)?(await getWeatherData(city)):(await getWeatherDataloc(lat,lon));
        setWeatherData(data);
        setLoading(false);
    }catch(error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  },[databyloc]);
const[lat,setLat]=useState(0);
const[lon,setLon]=useState(0);




function getloclatlon (){
    setDatabyloc(true);
  
    navigator.geolocation.getCurrentPosition( function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
  })
  getData();
  };


  const formatToLocalTime = (
    secs,
    format = "cccc, dd LLL yyyy' | 'hh:mm a"
  ) => DateTime.fromSeconds(secs).toFormat(format);



return (
    <>
<h3 className="font-bold text-gray-700 text-[22px] text-center  leading-7"> WEATHER APP</h3>
<div className="min-h-screen mx-auto  max-w-sm flex flex-col  justify-center ">
 
<div className="  bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div
          className="h-[170px]"
          style={{
            backgroundImage:
              "url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/ebc4db2235034.560a96356930d.gif)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
         </div>
         <div className='flex flex-col my-0'>
         

         <div className="mb-3 mt-1 xl:w-96">
  <div className="relative m-0.5 flex w-full flex-wrap items-stretch">
    <input 
      type="search"
      value={city} onChange={(e) => setCity(e.target.value)}
      className="relative m- -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1" />


    <button
      className="relative z-[2] flex items-center rounded-r bg-slate-700  px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      onClick={getdatasearch}
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
        
    
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd" />
      </svg>
    </button>


    <button

      className="relative z-[2] flex items-center rounded-r bg-slate-700 mx-1 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light"
      onClick={getloclatlon}
      
     
      >
        
    
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
    </button>




  </div>
</div>




{loading ? (
          <div className="flex justify-center py-[164px]">
            <ReactLoading 
              type={"spin"} 
              color={"black"}
              />
          </div>
        ) : ( 
        <>
          {weatherdata !== null ?
           (


      <div>
           <p className="font-bold p-2 bg-amber-400 text-gray-800 text-[22px] text-center leading-7">
           {weatherdata.name} | {weatherdata.sys.country}
          </p>
        


          <div className="p-4 sm:p-4">
          <div className="flex flex-col items-center justify-center ">
          <p className="text-grey-700 text-xl font-extralight">
          {formatToLocalTime(weatherdata.dt)}
          </p>

          <div className=" relative bg-gray-600 w-24 mt-2 rounded-lg shadow-xl">
            <span className=" w-full h-full flex justify-center items-center text-2xl text-white">
            {weatherdata.weather[0].main}
            </span>
          </div>

          <div className="flex flex-row items-center justify-center text-black  py-3">
            <p className="text-5xl mx-20  px-1">{parseFloat(weatherdata.main.temp - 273.15).toFixed(1)}
                    &deg;C</p>
           
          </div>

          <div className="flex flex-row items-center justify-center space-x-0.5 text-black text-sm py-3">
            <p className="flex items-center font-light">
           
            <CiTempHigh size={18} />Real fell:
                <span className="font-medium ml-1">{parseFloat(weatherdata.main.feels_like - 273.15).toFixed(1)}
                    &deg;C</span>
                </p>
            <p className="font-light">|</p>

            <p className="flex items-center font-light">
            <WiHumidity size={18} />Humidity:
                <span className="font-medium ml-1">{weatherdata.main.humidity.toFixed()}%</span>
            </p>
            <p className="font-light">|</p>

            <p className=" flex items-center font-light">
            <WiStrongWind size={18} />Wind: 
                <span className="font-medium ml-1">{weatherdata.wind.speed.toFixed()} km/h</span>
            </p>
           
          </div>



          <div>
       <div>
        <div className=" w-full  flex items-center justify-between mt-2">
        <p className="text-black font-medium uppercase">ADDI. INFO</p>
        </div>
        <hr className="my-1 border-gray-950" />

       <div className="flex  space-x-5 flex-row items-center justify-between text-black">
       

        
          <div className="flex flex-col items-center justify-between">
            <p className="font-light text-sm">RISE</p>
            <img
              src={sunrise}
              className="w-10 my-1 "
              alt=""
            />
            <p className="font-small">{formatToLocalTime(weatherdata.sys.sunrise, "hh:mm a")}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">SET</p>
            <img
              src={sunset}
              className="w-10 my-1"
              alt=""
            />
            <p className="font-small">{formatToLocalTime(weatherdata.sys.sunset, "hh:mm a")}</p>
          </div>
 

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">PRESSURE</p>
            <img
              src={pressure}
              className="w-10 my-1"
              alt=""
            />
            <p  className="font-small "> {weatherdata.main.pressure}
                    <span className="ml-1">hPa</span></p>
          </div>


          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">VISIBLITY</p>
            <img
              src={visiblity}
              className="w-10 my-1"
              alt=""
            />
            <p className="font-small">{weatherdata.visibility }
            <span className="ml-1">Meter</span></p>
          </div>
</div>
       </div>
       </div>
        </div>
        </div>
        </div>
        ) : null}
              </>
             )}
        </div>
        </div>
        </div>




        </div>
</>

       )
     }

export default App
