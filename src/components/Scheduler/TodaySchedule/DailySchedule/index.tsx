import { dailySchedule } from "..";
import { TodaySchedule } from "../../../../dictionary/Dictionary";
import { getPartOfDay } from "../../../../utils/general";

import './index.scss';

interface IDailySchedule{
    schedule: dailySchedule;
}

type IWorkoutFoodSchedule = {
    workout: string;
    food: string;
}

export const DailySchedule = ({schedule} : IDailySchedule)=>{

    const partOfDay: number = getPartOfDay();
    const {workout, food } = schedule;
    const workoutAndFoodSchedule: IWorkoutFoodSchedule[] = [
        { workout: workout.morning, food: food.morning },
        { workout: workout.noon, food: food.noon },
        { workout: workout.evening, food: food.evening },
    ];

    return (
        <div className="daily-schedule-wrapper">
            <h1>{TodaySchedule.title}</h1>
            <div className="schedule">
                <ul>
                    {workoutAndFoodSchedule.map((schedule : IWorkoutFoodSchedule,index: number)=>{
                        return <li key={index} className={index === partOfDay ? 'active-work-food' : undefined}>{schedule.workout}</li>
                    })}
                </ul>
                <ul>
                    {workoutAndFoodSchedule.map((schedule : IWorkoutFoodSchedule,index: number)=>{
                        return <li key={index} className={index === partOfDay ? 'active-work-food' : undefined}>{schedule.food}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}