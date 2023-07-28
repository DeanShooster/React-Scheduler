import { ScheduleWeekly } from '../../../dictionary/Dictionary';

import { Table } from './Table';

import './index.scss';

export const WeeklySchedule = () => {
    return (
        <section className='weekly-schedule-page'>
            <h1>{ScheduleWeekly.title}</h1>
            <Table />
        </section>
    );
}