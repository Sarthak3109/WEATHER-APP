import React, {useState, useEffect,useRef} from 'react'
import LineChart from './LineChart';
import ErrorLoading from './ErrorLoading';
import Loading from './Loading';
import { WeatherCard } from './Card';
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";

import  InfoCard  from './InfoCard'


const Body = ({city}) => {
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SARTURDAY', 'SUNDAY'];
    const APIKEY = 'b1ea8dbd527795c5c4643393432b795f';
    const [loading , setloading] = useState(0)
    const myRef = useRef()
    const [imageURL,setImageURL] = useState(".../public/weather_images/clear.png")
    const [humidity, sethumidity] = useState(0)
    const [temp, settemp] = useState(0)
    const [max_temp, setmax_temp] = useState(0)
    const [min_temp, setmin_temp] = useState(0)
    const [City, setCity] = useState(city)
    const [pressure, setpressure] = useState(0)
    const [foreCastTemp, setforeCasttemp] = useState([])
   const[foreCastDetails, setforeCastDetails] = useState([])

    



    useEffect(()=>{
     const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${APIKEY}`
    setloading(0)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.message){
                setloading(2)
        }else{
            setloading(1)
            const str = data.weather[0].main.toLowerCase()
         
            sethumidity(data.main.humidity)
            settemp(data.main.temp)
            setmax_temp(data.main.temp_max)
            setmin_temp(data.main.temp_min)
            setpressure(data.main.pressure)

            if(Number(city) != NaN)
                setCity(data.name)
         
        }
        
        
    } )





    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?units=metrics&q=${city}&appid=${APIKEY}`
    fetch(forecastURL)
    .then(res => res.json())
    .then((data) => {
        if(data.message)return
        setforeCasttemp(prev => [] )
        setforeCastDetails(prev => [])
        const date = new Date()
        data.list.forEach((ele,idx)=>{
            if(idx%8 == 0){
                const icon = ele.weather[0].icon.substring(0,2) + 'n'
                setforeCasttemp(prev => [...prev, Math.round(ele.main.temp - 273) ])
                setforeCastDetails(prev => [...prev,
                
                {
                    temp : Math.round(ele.main.temp - 273),
                    humidity : ele.main.humidity,
                    pressure : ele.main.pressure,
                    condition: ele.weather[0].main,
                    day : days[(date.getDay() + prev.length)%7],
                    imgurl : `https://openweathermap.org/img/wn/${ele.weather[0].icon}@2x.png`
                }
                ])
            }
            // console.log(idx)
        })

        
    })

    }, [city])






    function scrollLeft(e){
        myRef.current.scrollBy(-(myRef.current.clientWidth - 2),0)
        e.target.opacity = 0.5
    }
    function scrollRight(){
        myRef.current.scrollBy(myRef.current.clientWidth - 2,0)
    }










  return (
    
    <div className='bg-[white] relative min-h-[78vh] sm:w-[87vw] md:w-[80vw] 2xl:w-[60vw] m-[auto] mt-[5vh]  bg-opacity-50 rounded-lg '>
        {
                loading === 0 ? 
                (   
                     <Loading />
                ):





                (
                    loading === 1 ? 
                    (<>
                    <div className=' min-h-[78vh]   flex flex-col justify-between  shadow-xl shadow-[grey]'>
                        <div class='flex justify-center items-center flex-col xl:flex-row h-[70%]  text-center'>
                      
                        <LineChart x_axis_data = {foreCastTemp} />  
                      
                        <InfoCard humidity = {humidity} pressure = {pressure}
                        temp = {temp} max_temp = {max_temp} min_temp = {min_temp}
                        />
                        
                        </div>
                        

                        <div className='relative  w-[100%]'>
                        <div ref = {myRef} className='w-[100%] h-[100%] card-container scroll-smooth flex  overflow-x-scroll '>

                         {   foreCastDetails.map(ele=>{
                                return(
                                    <WeatherCard imgurl = {ele.imgurl} day = {ele.day} city = {City} humidity = {ele.humidity} temp = {ele.temp} condition = {ele.condition} pressure = {ele.pressure} />
                                )
                            })}
                            

                           
                           
                            <AiOutlineDoubleLeft onClick={(e) => scrollLeft(e)} size={50} className='absolute top-[50%] left-[0] cursor-pointer translate-y-[-50%] text-[grey] '/>
                            <AiOutlineDoubleRight size={50} onClick={scrollRight} className='absolute top-[50%] cursor-pointer right-0 translate-y-[-50%] text-[grey]'/>
                        </div>
                        </div>
                      
                    </div>
                    </>)






                    : ( <div className = 'shadow-xl absolute top-[50%] w-[100%] translate-y-[-50%] flex flex-col justify-between  h-[90%]'>
                        <ErrorLoading />
                     <div className='h-[30%]  text-[grey] flex justify-center items-center  text-[1.5em] sm:text[2em] md:text-[2.2em] lg:text-[2.5em]'>
                           CITY OR ZIPCODE NOT RECOGNIZED
                        </div>
                        </div>
                    )
                   
                )
        }
    </div>
  )
}

export default Body