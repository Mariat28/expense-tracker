import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return(
        <div className="flex justify-around rounded-sm shadow-xl bg-purple-200  py-3 text-center h-52">
            {props.dataPoints.map(dataPoint => <ChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            />)}
        </div>
    );
}
export default Chart;