
//note to self: probably should've been a reusable component to use also for the mood div 
//also should've laid out the divs better to avoid using such manual margins 

function AverageSleep({ averageSleep }){
    let sleep = "";
    if(averageSleep <= 2){
            sleep = "<2";
        }else if(averageSleep <= 4){
           sleep = "3-4";
        }else if(averageSleep <= 6){
            sleep = "5-6";
        }else if(averageSleep <= 8){
            sleep = "7-8";
        }else if(averageSleep >= 9){
            sleep = "9+"; 
        }
    
        console.log("new sleep: " + sleep);
        console.log("avgSleep: " + averageSleep);



    return(
        <div className="border border-indigo-200 bg-indigo-400 h-30.5 w-70.5 mt-5 rounded-3xl">
            <div className="absolute border border-indigo-200 bg-indigo-200  rounded-br-2xl rounded-tl-4xl h-20 w-15 ml-55 mt-10">
                <span className="absolute border border-indigo-200 bg-indigo-200 rounded-tl-full h-20 w-20 -ml-12"></span>
            </div>
            <div className="absolute border border-indigo-200 bg-indigo-200  rounded-br-3xl rounded-tl-4xl h-27 w-17 ml-53 mt-3 opacity-40">
                <span className="absolute border border-indigo-200 bg-indigo-200 rounded-tl-full h-27 w-30 -ml-19 opacity-90"></span>
            </div>
            <div className="inline">
                <img src="/sleeping_7425266.png" className="h-10 w-10 mt-5 ml-3"></img>
                <span className="absolute ml-15 -mt-8.5 text-2xl font-bold text-indigo-950">{sleep} Hours</span>
            </div>
            <br />
            <div className="inline">
                <i className="fa-solid fa-arrow-right ml-3 absolute text-gray-50 text-sm"></i>
                <span className="absolute ml-8 -mt-1.5 text-white">Calculated from the last 5 logs</span>
            </div>
        </div>
    )
}

export default AverageSleep;