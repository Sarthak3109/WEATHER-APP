import React,{useEffect,useState} from 'react'
import Typewriter from "typewriter-effect"



const InfoCard = ({humidity , pressure , temp , max_temp, min_temp}) => {
  return (
    // min-w-[3vw]
    <div className='flex justify-center items-center  text-[black]  '>
    <div className='min-h-[10vh]  mb-[20px] lg:mb-[0px]  shadow-xl shadow-[#734F96] m-1 px-1 sm:px-[20px] md:px-[40px] xl:px-2 bg-[#BF94E4] bg-opacity-[0.3] rounded-lg m-[auto] flex flex-col items-center gap-2 justify-between text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] mt-2 lg:mt-0'>
        <div>
          
            <Typewriter onInit = {
                (typewriter)=>{
                    typewriter.typeString(`<b>Humidity</b> : ${humidity}%`).start()
                }
            } 
            />
         
        </div>
        <div>

        <Typewriter onInit = {
                (typewriter)=>{
                    typewriter.typeString(`<b>Pressure</b> : ${pressure} atm `).start()
                }
            }
            />


        </div>
        <div>

        <Typewriter onInit = {
                (typewriter)=>{
                    typewriter.typeString(`<b>Temperature</b> : ${temp}°C`).start()
                }
            }
            />
        </div>
        <div>
        <Typewriter onInit = {
                (typewriter)=>{
                    typewriter.typeString(`<b>Max Temperature</b> : ${max_temp}°C`).start()
                }
            }
            />
        </div>
        <div>
        <Typewriter onInit = {
                (typewriter)=>{
                    typewriter.typeString(`<b>Min Temperature</b> : ${min_temp}°C`).start()
                }
            }
            />
        </div>
    </div>
    </div>
  )
}

export default InfoCard