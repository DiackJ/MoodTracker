import { useState, useEffect } from 'react';
import InputOverlay from '../reusable/input-overlay';

function LogMoodButton({ handleAverageFetch }){
     const [clicked, setClicked] = useState(false);

     const handleOpen = () => {
        setClicked(prev => !prev);
     };

    return(
        <div className="flex justify-center w-full">
            <button className="text-violet-50 text-xl mt-10 font-bold font-[Nunito] border border-indigo-600 bg-indigo-600 hover:text-2xl transition-all hover:cursor-pointer h-15 w-60 rounded-lg hover:shadow-md hover:scale-100 absolute" 
            type="button"
            onClick={handleOpen}>Log today's mood...</button>
            {clicked && (
                <div>
                    <InputOverlay visibility={clicked} showForm={handleOpen} handleAverageFetch={handleAverageFetch}/>
                </div>
            )}
        </div>
    )
}

export default LogMoodButton;