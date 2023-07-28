
import { IChartData, chartsData } from '../../../../data/chartsData';

import './index.scss';

interface IChartNav{
    chart: IChartData;
    setChart: Function;
}

export const ChartNav = ({chart,setChart} : IChartNav) => {
    return (
        <nav className='chart-nav-container'>
            {chartsData.map((chartItem: IChartData,index: number)=>{
                return <div key={index} className={chart.name === chartItem.name ? 'active-chart' : undefined} onClick={()=>setChart(chartsData[index])}>{chartItem.name}</div>
            })}
        </nav>
    );
}