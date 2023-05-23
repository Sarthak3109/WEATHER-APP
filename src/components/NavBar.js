import React, {useState} from 'react'
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import Body from './Body'
const NavBar = ({dict}) => {
    const [value, setValue] = useState('')
    const [option, setOptions] =useState([]);
    const [cityOnDisplay, setcityOnDisplay] = useState('Delhi')



    const handlechange = (e)=>{
            setValue(e.target.value)
            setOptions(prev=>[])
            if(e.target.value == '')return
            dict.forEach(ele =>{
                    const substr = e.target.value.toLowerCase()
                    const lower = ele.toLowerCase()
                    const idx = lower.indexOf(substr);
                    if(idx === 0)
                    setOptions(prev => [...prev, ele])
            })
    }
    const search = ()=>{
      setcityOnDisplay(value)
      setOptions([  ])
     }
    const handleEnter =(e)=>{
      
      if(e.key == 'Enter'){
        // console.log(e.target)
        search()
      }
    }

    const handleClick = (e)=>{
            e.preventDefault()  
            setOptions([]);
            setValue(e.target.innerHTML)
            // search()
    }




  return (
    <div className='text-center  m-[auto] w-[80vw] pt-[1vh] relative text-[white] font-serif ' >
      <div className='flex justify-center  items-center'>
          <Input variant='flushed' color='#2C051A' onKeyDown={e => handleEnter(e)} _placeholder={{color: '#3A405A' }} placeholder='Enter City /  Zip Code' fontSize='3rem '  value ={value}   className='text-center  p-[3%] ' onChange={handlechange} />
         <button onClick={search}> <AiOutlineSearch className='text-3xl text-[#3A405A]' /></button>
          </div>
          <div className='relative w-[80vw]'>
          <div className='max-h-[50vh] min-w-[80vw] overflow-scroll navbar absolute top-[0]' >    
         
            {
                option.map((ele,idx)=>{
                    return (
                        <Button fontSize = 'xl' borderRadius = {0} value = {idx} onClick = {handleClick} colorScheme='purple' className='w-[100%] bg-sky-500/10 z-[100]' size = 'lg'>{ele}</Button>
                    )
                })
            }
          
            </div>
            </div>
        <Body city = {cityOnDisplay}/>    
    </div>
  )
}

export default NavBar