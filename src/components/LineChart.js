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






export default function LineChart({x_axis_data}) {
  
const [data, setdata ]= useState({
  labels: ['TODAY', 'ONE DAY AFTER', 'TWO DAYS AFTER', 'THREE DAYS AFTER', 'FOUR DAYS AFTER'],
  datasets: [
    {
      label: 'WEATHER FORECAST OF NEXT 5 DAYS',
      data: x_axis_data,
      fill: false,
      borderColor: 'black',
    },
  ],

})


  const options = {
  
    legend: {
      display: false, // Set display property to false to hide the legend key
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
    console.log(x_axis_data)
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
    
  <div className='text-[200px]    flex items-center justify-center h-[100%] w-[60%] '>
    
  <Line options={options} data={data} className=' min-w-[100%] min-h-[70%]' />


  </div>
  
  
  )
}
