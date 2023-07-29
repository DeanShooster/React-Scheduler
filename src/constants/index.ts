import { ScheduleWeekly } from "../dictionary/Dictionary";

// Timers
export const morningStart: number = 8;
export const noonStart: number = 12;
export const eveningStart: number = 18;
export const nightStart: number = 23;

// Size
export const iPad: number = 1250;
export const mobile: number = 600;

// Days
const {Sunday,Monday,Tuesday,Wednesdays,Thursday,Friday,Saturday} = ScheduleWeekly.days;
export const days: string[] = [Sunday,Monday,Tuesday,Wednesdays,Thursday,Friday,Saturday];