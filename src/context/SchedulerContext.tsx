import { createContext, useState , ReactNode } from "react";

type Props = { children: ReactNode };

interface ISchedulerContext{
    scheduler: IScheduler;
    setScheduler: Function;
}

export interface IScheduler{
    today: boolean;
    weekly: boolean;
    progress: boolean;
}

export const schedulerContext = createContext< ISchedulerContext>({
    scheduler: {today: true, weekly: false, progress: false},
    setScheduler: ()=>{}
});

export const SchedulerContextProvider = ({children} : Props) => {
    const [ scheduler,setScheduler ] = useState< IScheduler>({today: true, weekly: false, progress: false});
    return (
        <schedulerContext.Provider value={{scheduler,setScheduler}}>
            { children }
        </schedulerContext.Provider>
    );
}