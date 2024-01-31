import React from 'react';
import dayjs from 'dayjs';
const Forcast = ({ elem }) => {
    
    return (
        <div className='m-auto w-3/12 flex justify-between justify-items-center'>
            <div className='flex w-1/2 justify-evenly'>
                <p className='my-auto w-30'>{dayjs(elem.date).format("ddd MMM D")}</p>
                <img src={elem.day.condition.icon} alt='icon' className='w-12'></img>
            </div>
            <div className='flex justify-between w-2/6'>
                <p className='my-auto w-35'>High: {elem.day.maxtemp_c}</p>
                <p className='my-auto w-35'>low: {elem.day.mintemp_c}</p>
            </div>
            
        </div>
    )
}

export default Forcast