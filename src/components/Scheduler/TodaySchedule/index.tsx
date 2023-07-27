import { useEffect, useState } from 'react';
import { IWorkoutSchedule, workoutSchedule } from '../../../data/workoutSchedule';
import { IFoodSchedule, foodSchedule } from '../../../data/foodSchedule';

import { TodayWorkoutImage } from './TodayWorkoutImage';
import { DailySchedule } from './DailySchedule';

import './index.scss';

export type dailySchedule = {
    workout: IWorkoutSchedule;
    food: IFoodSchedule;
}

export const TodaySchedule = () => {

    const [dailySchedule,setDailySchedule] = useState<dailySchedule | null>(null);

    useEffect(()=>{
        const today: number = new Date().getDay();
        const workout:IWorkoutSchedule = workoutSchedule[today];
        const food: IFoodSchedule = foodSchedule[today]
        setDailySchedule({workout,food});
    },[]);

    return (
        <section className='today-scheduler-page'>
            <div className='today-scheduler-container'>
                {dailySchedule && 
                    <>
                        <TodayWorkoutImage schedule={dailySchedule.workout}/>
                        <DailySchedule schedule={dailySchedule}/>
                    </>
                }
            </div>
        </section>
    );
}