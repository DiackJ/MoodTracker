import { useState, useEffect, useRef } from 'react';

//"fa-regular fa-face-grin" //very happy
  
// "fa-regular fa-face-smile" //happy

//"fa-regular fa-face-meh" //neutral

//"fa-regular fa-face-frown" //sad

//"fa-regular fa-face-sad-tear" //very sad

function AverageMood({ averageMood }){
    //temporary variables for visual 
    let icon = "";
    let text = "";
    let bgColor = "";
    let designBgColor = "";
    let designBorderColor = "";

        if(averageMood <= 2){ //2- = sad
            icon = "fa-regular fa-face-frown";
            text = "Sad"; 
            bgColor = "bg-violet-500";
            designBgColor = "bg-violet-300";
            designBorderColor = "border-violet-300";
        }else if(averageMood <= 4){ //3-4 = neutral
            icon = "fa-regular fa-face-meh";
            text = "Neutral";
            bgColor = "bg-blue-300";
            designBgColor = "bg-blue-200";
            designBorderColor = "border-blue-200";
        }else if(averageMood >= 5){ //5+ happy 
            icon = "fa-regular fa-face-smile";
            text = "Happy";
            bgColor = "bg-green-400";
            designBgColor = "bg-green-300";
            designBorderColor = "border-green-300";
        };


    return(
        <div className={`border border-violet-50 ${bgColor} absolute h-30.5 w-70.5 mt-5 rounded-3xl`}>
            <div className={`absolute border ${designBorderColor} ${designBgColor}  rounded-br-2xl rounded-tl-4xl h-20 w-15 ml-55 mt-10`}>
                <span className={`absolute border ${designBorderColor} ${designBgColor} rounded-tl-full h-20 w-20 -ml-12`}></span>
            </div>
            <div className={`absolute border ${designBorderColor} ${designBgColor} rounded-br-3xl rounded-tl-4xl h-27 w-17 ml-53 mt-3 opacity-40`}>
                <span className={`absolute border ${designBorderColor} ${designBgColor} rounded-tl-full h-27 w-30 -ml-19 opacity-90`}></span>
            </div>
            <div className="inline">
                <i className={`${icon} absolute text-4xl mt-7.5 ml-5`}></i>
                <span className="absolute ml-16 mt-8 text-2xl font-bold">{text}</span>
            </div>
            <br />
            <div className="inline">
                <i className="fa-solid fa-arrow-right ml-3 mt-15 absolute text-white text-sm"></i>
                <span className="absolute mt-13.5 z-1 text-white pl-8">based on the last 5 check-ins</span>
            </div>
            
        </div>
    )
}

export default AverageMood;