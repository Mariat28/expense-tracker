import React from "react";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className="flex flex-col">
      <div className="h-full fex flex-col gap-1  items-center">
        <div className="h-full rounded-xl w-full  overflow-hidden flex flex-col justify-end  bg-purple-400 shadow-xl">
          {/* bar fill  */}
          <div
            className="w-full border  border-slate-700 rounded-xl bg-blue-900  transition-all ease-out duration-300" style={{ height:barFillHeight }}
          ></div>
        </div>
      </div>
      {/* bar label  */}
      <div className="font-bold text-base text-center">{props.label}</div>
    </div>    
  );
};
export default ChartBar;
