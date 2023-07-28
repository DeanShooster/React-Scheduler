import { useContext } from 'react';
import { schedulerContext } from '../../context/SchedulerContext';

import { TodaySchedule } from './TodaySchedule';
import { WeeklySchedule } from './WeeklySchedule';
import { Progress } from './Progress';

import './index.scss';
import { BackgroundVideo } from './BackgroundVideo';

export const Scheduler = () => {
    const {scheduler} = useContext(schedulerContext);
    return (
        <section className='scheduler-container'>
            <BackgroundVideo />
            {scheduler.today && <TodaySchedule />}
            {scheduler.weekly && <WeeklySchedule />}
            {scheduler.progress && <Progress />}
        </section>
    );
}