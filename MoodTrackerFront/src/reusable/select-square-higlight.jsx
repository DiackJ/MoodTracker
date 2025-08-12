import { useState, useEffect } from 'react';

function Highlight({ select }){
    const [ping, setPing] = useState(false);

    useEffect(() => {
        setPing(true);
        const timeout = setTimeout(() => setPing(false), 105);
        return () => clearTimeout(timeout);
    },[select])

     return(
        <div className={ping ? "animate-ping ease-in scale-40 border border-indigo-200 h-6 w-6 bg-indigo-300 rounded-sm blur-xs absolute transition-colors" : "border border-indigo-200 h-6 w-6 bg-indigo-300 rounded-sm blur-xs absolute transition-all"}>

        </div>
    )
}

export default Highlight;