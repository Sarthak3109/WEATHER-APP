import React from 'react'
import { Radio } from 'react-loader-spinner'
const ErrorLoading = () => {
  return (
    <div className='w-[100%] flex justify-center items-center '>
                
    <Radio
   visible={true}
   height="30vh"
   width="80vw"
   ariaLabel="radio-loading"
   wrapperClass="radio-wrapper"
   colors={['#008080', '#FFEFB4', '#FF7E6B']}
   />
                       
  
</div>
  )
}

export default ErrorLoading