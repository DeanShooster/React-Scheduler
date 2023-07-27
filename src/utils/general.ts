import { Bike, Chill, Gym, Running, Sleeping, Workout } from "../assets";
import { eveningStart, morningStart, nightStart, noonStart } from "../constants";
import { IWorkoutSchedule } from "../data/workoutSchedule";
import { TodaySchedule } from "../dictionary/Dictionary";

/**
 * Given a daily objects and the daily hour finds which image should it display.
 * @param hour Hour of todays Day: 0-23.
 * @param dailyWorkout DailyWorkout object: {morning , noon , evening }.
 * @returns Image string
 */
export function findWorkoutImageAccordingToHour(hour: number, dailyWorkout: IWorkoutSchedule){
    if(hour > morningStart && hour < noonStart) return findWorkoutImage(dailyWorkout.morning)
    if( hour >= noonStart && hour < eveningStart ) return findWorkoutImage(dailyWorkout.noon)
    if(hour >= eveningStart && hour < nightStart) return findWorkoutImage(dailyWorkout.evening)
    return Sleeping;
}

/**
 * Case function for a workout object.
 * @param workoutType WorkoutType object: { Gym, Bike , Running ....}
 * @returns Image string.
 */
function findWorkoutImage(workoutType: string){
    switch(workoutType){
        case TodaySchedule.workout.gym: return Gym;
        case TodaySchedule.workout.bike: return Bike;
        case TodaySchedule.workout.running: return Running;
        case TodaySchedule.workout.workout: return Workout;
        case TodaySchedule.workout.chill: return Chill;
    }
    return '';
}

/**
 * Calculates the part of the day.
 * @returns Number which indicates part of the day: 0 - morning , 1 - noon , 2 - evening
 */
export function getPartOfDay(){
    const hour = (new Date()).getHours();
    if(hour > morningStart && hour < noonStart) return 0;
    if(hour >= noonStart && hour < eveningStart) return 1;
    if(hour >= eveningStart && hour < nightStart ) return 2;
    return -1;
}