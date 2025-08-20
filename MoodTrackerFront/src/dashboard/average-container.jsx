import { useState, useEffect } from 'react'; 
import AverageMood from './average-mood-container';
import AverageSleep from './average-sleep-container'; 

function AverageContainer({ averageMood, averageSleep }){
    // const handleChange = () => {
    //     setMoodContainer(prev => !prev);
    //     setSleepContainer(prev => !prev); 
    //     setMoodLog(prev => prev + 1); 
    //     setSleepLog(prev => prev + 1);
    // }

    // console.log(averageMood);
    // console.log(averageSleep);

    return(
        <div className="border border-violet-50 bg-white opacity-80 h-fit w-fit rounded-2xl px-5 py-5 mt-35">
            <p className="text-2xl font-[Nunito] font-bold">Average mood
                <span className="text-sm ml-2 font-[Nunito] font-medium text-gray-400">(Last 5 check-ins)</span>
            </p> 
            <div className="flex justify-center">
                {averageMood <= 0 ? (
                <div className="border border-violet-50 bg-indigo-100 absolute h-30.5 w-70.5 mt-5 rounded-3xl">
                    <span className="pt-5 pl-5 text-indigo-950 text-2xl font-[Nunito] font-bold absolute">Keep tracking!</span>
                    <br />
                    <span className="absolute text-gray-500 text-sm pt-10 pl-2 font-[Nunito] font-medium">Log 5 check-ins to see your average mood.</span>
                </div> ) : (
                <AverageMood averageMood={averageMood}/> 
                )}
            </div>
            <p className="text-2xl mt-40 font-[Nunito] font-bold">Average sleep
                <span className="text-sm m-2 text-gray-400 font-[Nunito] font-medium">(Last 5 check-ins)</span>
            </p>
            <div className="flex justify-center"> 
                {averageSleep <= 0 ? (
                <div className="border border-violet-50 bg-indigo-100 h-30.5 w-70.5 mt-5 rounded-3xl">
                    <span className="pt-5 pl-5 text-indigo-950 text-2xl font-[Nunito] font-bold absolute">Not enough data!</span>
                    <br />
                    <span className="absolute text-gray-500 text-sm pt-10 pl-2 font-[Nunito] font-medium">Track 5 nights to view your average sleep.</span>
                </div> ) : (
                    <AverageSleep averageSleep={averageSleep}/>
                )}
            </div>
        </div>
    )
}

export default AverageContainer;