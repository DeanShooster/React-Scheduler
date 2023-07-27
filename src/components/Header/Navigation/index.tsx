import { useContext } from 'react';
import { IScheduler, schedulerContext } from '../../../context/SchedulerContext';

import { HeaderDictionary } from '../../../dictionary/Dictionary';

import './index.scss';

export const Navigation = () => {

    const {scheduler, setScheduler} = useContext(schedulerContext);

    const scheduleNavHandler = (event: any , scheduleID: number) => {
        if(event.target.className) return;
        const schedulerReset: IScheduler = {today: false, weekly: false, progress: false};
        switch(scheduleID){
            case 1:{ setScheduler({schedulerReset, today: true}); return; }
            case 2:{ setScheduler({schedulerReset, weekly: true}); return; }
            case 3:{ setScheduler({schedulerReset, progress: true}); return; }
        }
    }

    return (
        <nav className='navigation'>
            <div className={scheduler.today ? 'selected-nav' : undefined} onClick={(event: any)=>scheduleNavHandler(event,1)} data-item='test'>{HeaderDictionary.navigation.today}</div>
            <div className={scheduler.weekly ? 'selected-nav' : undefined} onClick={(event: any)=>scheduleNavHandler(event,2)}>{HeaderDictionary.navigation.weekly}</div>
            <div className={scheduler.progress ? 'selected-nav' : undefined} onClick={(event: any)=>scheduleNavHandler(event,3)}>{HeaderDictionary.navigation.progress}</div>
        </nav>
    );
}