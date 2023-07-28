import { useState } from 'react';
import { IChartData, chartsData } from '../../../data/chartsData';

import { ChartNav } from './ChartNav';
import { Chart } from './Chart';

import './index.scss';

export const Progress = () => {
    const [chart,setChart] = useState<IChartData>(chartsData[0]);
    return (
        <section className='progress-page'>
            <ChartNav chart={chart} setChart={setChart}/>
            <Chart chart={chart}/>
        </section>
    );
}