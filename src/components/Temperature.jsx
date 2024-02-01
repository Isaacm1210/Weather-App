import React from 'react'

const Temperature = ({ current, unit }) => {

  return (
    <div className='w-2/3 m-auto flex justify-center text-center'>
        <div className='text-4xl text-center'>
          <img src={current.condition.icon} alt='Weather icon' className='h-20 w-20 m-auto'></img>
          {unit === 'c' ? current.temp_c + "\u2103" : current.temp_f + "\u2109"}
        </div>
    </div>
  )
}
export default Temperature;