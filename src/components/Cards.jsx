import React from 'react'
import Maindata from './Maindata'
import Search from './Search'

function Cards() {
  return (
    <>

    <div className=" my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="max-w-md mx-auto">
        <div
          className="h-[200px]"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
         </div>
         <div className='flex flex-col my-0'>
         <Search/>
        <Maindata/>
      </div>
    </div>
    </div>
 
</>

  )
}

export default Cards