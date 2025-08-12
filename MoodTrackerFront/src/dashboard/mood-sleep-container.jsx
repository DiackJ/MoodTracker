import { useState, ueEffect } from 'react';
import MoodSleepGraph from './mood-sleep-graph';

function MoodSleepContainer({ data = [] }){
    // const [data, setData] = useState(false);

    // const d = () => {
    //     if(mood !== null && sleep !== null && entryDate !== null){
    //     setData(true);
    // }
    //     setData(false);
    // }
    
    

    return(
        <div className="font-[Nunito] border border-violet-50 bg-white opacity-80 h-fit w-fit px-10 py-5 rounded-2xl mt-35 ml-20">
            <h1 className="font-extrabold text-4xl">Mood and sleep trends</h1>
            <div id="graph-container" className="">
                {data.length !== 0 ? (<MoodSleepGraph data={data}/>) : 
                (<p className="mt-10 mb-10 font-medium text-gray-500">Not enough data yet. Please add at least one entry.</p>)}
            </div>
        </div>
    );
}

export default MoodSleepContainer;


//<link rel="icon" href="/icon.png?03e3dd37cbb2afc4" type="image/png" sizes="32x32">