import { days } from '../../../../constants';
import { foodSchedule } from '../../../../data/foodSchedule';
import { workoutSchedule } from '../../../../data/workoutSchedule';
import { DataItem } from './DataItem';

import './index.scss';

export const Table = () => {
    const currentDay = (new Date()).getDay();
    return (
        <div className='table-container'>
            {days.map((day: string,index: number)=>{
                return (
                    <div key={index} className='day-wrapper'>
                        <div>{day}</div>
                        <DataItem workout={workoutSchedule[index].morning} food={foodSchedule[index].morning} isActive={index === currentDay}/>
                        <DataItem workout={workoutSchedule[index].noon} food={foodSchedule[index].noon} isActive={index === currentDay}/>
                        <DataItem workout={workoutSchedule[index].evening} food={foodSchedule[index].evening} isActive={index === currentDay}/>
                    </div>
                );
            })}
        </div>
    );
}