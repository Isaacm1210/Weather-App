import React from 'react'

const Temperature = ({ current }) => {

  return (
    <div className='w-3/3 m-auto flex justify-center text-center'>
        <div className='text-4xl '>
          <img src={current.condition.icon} alt='Weather icon' className='h-20 w-20'></img>
          {current.temp_c}{"\u2103"}
        </div>
    </div>
  )
}
export default Temperature;