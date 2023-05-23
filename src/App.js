import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {citydata} from './cityData';
import LineChart from './components/LineChart';
// import backgroundImage from './backgroundImage.jpg'
function App() {
  const [data, setdata] = useState([])
  const APIKEY = 'b1ea8dbd527795c5c4643393432b795f';
  useEffect(()=>{
    citydata.forEach(ele=>setdata(prev=>[...prev, ele.name]))

  }, [])
  return (
    <div className= {`App  bg-[#b7e1f7] min-h-[100vh]       
    bg-center bg-cover`}>

      <NavBar dict = {data} />
    
    
    </div>
  );
}

export default App;
