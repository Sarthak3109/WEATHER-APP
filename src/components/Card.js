import React,{useEffect, useState} from 'react'
import { WiHumidity } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";

export  const  WeatherCard = ({city,day, temp, condition, humidity, pressure, imgurl}) => {
 

  return (
    // min-w-100
    <div className=' mb-1 min-h-[20vh]  sm:min-w-[70%] md:mid-w-[60%] lg:min-w-[50%] xl:min-w-[30%]  sm:w-[49.5%] lg:w-[49%] w-[97%]  p-1  rounded-s-lg flex flex-col justify-between bg-[#CF7A6B]  bg-opacity-[0.55] ml-[2px] mr-[2px] shrink-0   flex-0 m-[1px] shadow-sm shadow-[#f3774d] xl:mt-0 mt-[20px]' >
    <div className='  text-[15px] md:text-[20px] lg:text-xl flex  justify-between items-center p-5'>
    <div className='text-[white] text-[#4d2529] text-bold'>{city.toUpperCase()}</div>
    <div className='text-[#4d2529] text-bold' >{day}</div>
    </div>



    <div className='flex  flex-col justify-center text-[#404040] items-center  '>
      <div className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-bold '>{temp}°C</div>
      <div className=' text-bold'>{condition}</div>
    </div>



    {/* gap200 */}
  <div className='flex  justify-evenly  items-center gap-[200px]'> 

    <div className=' p-3  flex flex-col justify-start items-start '>
      <div className=' flex  justify-start items-center '>

      <WiHumidity size=  {50}/><span className='text-[#014F86] text-[1rem] md:text-xl'>{humidity}%</span>
      </div>
      <div className=' flex  justify-start items-center '><WiNightFog size=  {50}/>
      <span className='text-[#014F86] '> {pressure}Pa </span>
      </div>
    </div>

 
    <div className='hidden md:block' >
      <img src = {imgurl} className='h-[20%] hidden md:block' />
      </div>
    </div>  



    </div>
    
  )
}
