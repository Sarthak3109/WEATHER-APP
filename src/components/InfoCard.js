import React,{useEffect,useState} from 'react'
import Typewriter from "typewriter-effect"



const InfoCard = ({humidity , pressure , temp , max_temp, min_temp}) => {
  return (
    <div className='flex justify-center items-center  text-[black] ml-[20px] '>
    <div className='min-h-[10vh]  mb-[20px] lg:mb-[0px] min-w-[3vw] shadow-xl shadow-[#734F96] p-2 bg-[#BF94E4] bg-opacity-[0.3] rounded-lg m-[auto] flex flex-col items-center gap-2 justify-between text-[1.3rem]'>
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