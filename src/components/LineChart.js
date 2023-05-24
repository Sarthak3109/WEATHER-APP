import React,{useEffect,useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);





// ChartJS.defaults.global.legend.display = false;
export default function LineChart({x_axis_data}) {
  
const [data, setdata ]= useState({
  labels: ['TODAY', 'ONE DAY AFTER', 'TWO DAYS AFTER', 'THREE DAYS AFTER', 'FOUR DAYS AFTER'],
  datasets: [
    {
      label: 'WEATHER FORECAST',
      data: x_axis_data,
      fill: false,
      borderColor: 'black',
    },
  ],

})


  const options = {
    
   
    plugins : {
      legend : {
        display : false
      }
    },
    scales: {
      x: {
        ticks: {
          display: false, // Set display property to false to hide x-axis labels
        },
        grid: {
          color: 'red', // Change the color of x-axis grid lines
          display:false
        },
        display:true,
        border:{
          color: 'black',
          width: 2
        }
      },
      y:{
        border:{
          color: 'black',
          width: 2
        },
        display:true,
        color:'red',
        ticks: {
          font: {
            weight: 'bold', // Make the y-axis labels bold
            size : '19',
          },
          color: 'black'
        },
        grid: {
          display:false
        }
      }
    }
  }

  
  
  useEffect(()=>{
    
    setdata((prevState) => ({
      ...prevState,
      datasets: [
        {
          ...prevState.datasets[0],
          data: x_axis_data,
        },
      ],
    }));
  }, [x_axis_data])

  return(
    // min-w-[3vw]
  <div className= 'flex flex-col items-center mt-2 p-0 justify-center h-[200px] sm:h-[350px] md:h-[340px] lg:h-[300px] xl:h-[100%] w-[100%] xl:w-[60%]  lg:w-[90%]'>
    <div className='text-[0.8rem] sm:text-[1rem] text-[black] font-bold'>WEATHER FORECAST FOR NEXT 5 DAYS</div>
  <Line options={options} data={data} className=' ' />


  </div>
  
  
  )
}
