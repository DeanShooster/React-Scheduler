import { LineChart, Line, XAxis , YAxis, Tooltip } from "recharts";
import { IChartData } from "../../../../data/chartsData";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { iPad, mobile } from "../../../../constants";

import './index.scss';

interface IChart{
    chart: IChartData;
}

export const Chart = ({chart} : IChart) => {

    const windowSize = useWindowSize();

    const graphHeightMobile = 450, graphHeight = 650;
    const graphMargin = {top: 25 , bottom: 25 , left: 15 , right: 15 };
    const graphWidthDesktopSize = 0.85, graphWidthIpadSize = 0.95;
    const graphStrokeWidth = 2.75, graphDotRadius = 5, graphActiveDotRadius = 10, xAxisTickMargin = 15, yAxisTickMargin = 5;
    const themeColor = '#ABA499', graphStrokeColor = 'white';
    const graphTooltipContent = 'black', graphTooltipFontSize = '1rem', graphTooltipFontWeight = 'bold';

    const chartName = chart.name.toLowerCase();
    const yUnit = chartName === 'running stamina' ? 'M' : (chartName === 'pullups' || chartName === 'dips' ? undefined : 'KG');

    return (
        <div className="chart-container">
            <LineChart width={windowSize > iPad ? windowSize*graphWidthDesktopSize : windowSize*graphWidthIpadSize} 
                        height={windowSize > mobile ? graphHeight : graphHeightMobile} data={chart.data} margin={graphMargin}>
                <XAxis dataKey='checkpoint' stroke={graphStrokeColor} strokeWidth={graphStrokeWidth} tickLine={false} tickMargin={xAxisTickMargin}/>
                <YAxis dataKey='value' stroke={graphStrokeColor} strokeWidth={graphStrokeWidth} tickLine={false} tickMargin={yAxisTickMargin} unit={yUnit}/>
                <Line type="monotone" dataKey='value' stroke={themeColor} strokeWidth={graphStrokeWidth}
                    dot={{r: graphDotRadius, fill: themeColor}} activeDot={{r: graphActiveDotRadius , stroke: graphStrokeColor }} />
                <Tooltip contentStyle={{background: graphTooltipContent, border: `3px solid ${graphStrokeColor}`, fontSize: graphTooltipFontSize,fontWeight: graphTooltipFontWeight}}/>
            </LineChart>
        </div>
    );
}