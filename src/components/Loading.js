import React from 'react'
import { ColorRing } from  'react-loader-spinner'


const Loading = () => {
  return (
    <div className='w-[100%] shadow-xl shadow-[grey] h-[100%] flex justify-center items-center'>
    <ColorRing
     visible={true}
     height="80vh"
     width="80vw"
     ariaLabel="blocks-loading"
     wrapperStyle={{}}
     wrapperClass="blocks-wrapper"
     colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
     
     />
    
  </div>
  )
}

export default Loading