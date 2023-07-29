
interface IDataItem{
    workout: string;
    food: string;
    isActive?: boolean
}

export const DataItem = ({workout,food, isActive} : IDataItem) => {
    return (
        <div className={`part-of-day ${isActive ? 'active-day' : undefined}`}>
            <div>{workout}</div>
            <span>|</span>
            <div>{food}</div>
        </div>
    );
}