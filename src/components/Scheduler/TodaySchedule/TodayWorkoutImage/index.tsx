import { useEffect, useState } from 'react';
import { IWorkoutSchedule } from '../../../../data/workoutSchedule';
import { findWorkoutImageAccordingToHour } from '../../../../utils/general';

import './index.scss';

interface ITodayWorkoutImage{
    schedule: IWorkoutSchedule;
}

export const TodayWorkoutImage = ({schedule} : ITodayWorkoutImage) => {

    const [imageSrc,setImageSrc] = useState<string>('');

    useEffect(()=>{
        const workoutImage = findWorkoutImageAccordingToHour((new Date()).getHours(),schedule);
        setImageSrc(workoutImage);
    },[schedule]);

    return (
        <div className='today-workout-img-wrapper'>
            <img alt='' src={imageSrc}/>
        </div>
    );
}