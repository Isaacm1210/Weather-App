import React from 'react';
import dayjs from 'dayjs';
const Forcast = ({ elem, unit }) => {
    
    return (
        <div className='m-auto w-2/3 flex justify-between justify-items-center'>
            <div className='flex w-1/2 justify-evenly'>
                <p className='my-auto w-30'>{dayjs(elem.date).format("ddd MMM D")}</p>
                <img src={elem.day.condition.icon} alt='icon' className='w-12'></img>
            </div>
            <div className='flex justify-evenly w-1/2'>
                <p className='my-auto w-35'>{unit === 'c' ? elem.day.maxtemp_c : elem.day.maxtemp_f}</p>
                <p className='my-auto w-35'>{unit === 'c' ? elem.day.mintemp_c : elem.day.mintemp_f}</p>
            </div>
            
        </div>
    )
}

export default Forcast