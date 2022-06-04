const ChartBar = (props) => {
    let barFillHeight = '0%';
    if(props.maxValue > 0) {
        barFillHeight= Math.round(props.value/props.maxValue*100) + ' %';
    }
    return(
        <div className="h-full fex flex-col items-center">
            <div className="h-full w-full border border-slate-700 rounded-xl bg-purple-400 overflow-hidden flex flex-col justify-end px-2">
                {/* bar fill  */}
                <div className="bg-purple-900 w-full transition-all ease-out duration-100 "
                style={{height: barFillHeight}}>

                </div>
                {/* bar label  */}
                <div className="font-bold text-base text-center">
                    {props.label}
                </div>
            </div>

        </div>
    )
    
}
export default ChartBar;