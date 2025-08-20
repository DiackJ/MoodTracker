import { useState, useEffect } from 'react';

function SelectCheck({ select }){
    const [ping, setPing] = useState(false);

    useEffect(() => {
        setPing(true); 
        const timeout = setTimeout(() => setPing(false), 105);
        return () => clearTimeout(timeout); 
    }, [select])
    
    return(
        <div className="flex justify-center bg-indigo-500">
          <i className={ping ? "fa-solid fa-check text-sm text-indigo-50 animate-ping transition-descrete scale-20" : "fa-solid fa-check text-sm text-indigo-50"}></i>
        </div>
    )
}

export default SelectCheck;