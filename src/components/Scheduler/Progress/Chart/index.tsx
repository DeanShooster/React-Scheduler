import { IChartData } from "../../../../data/chartsData";

import './index.scss';

interface IChart{
    chart: IChartData;
}

export const Chart = ({chart} : IChart) => {
    return (
        <div className="chart-container">
            
        </div>
    );
}