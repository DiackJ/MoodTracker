import { useState } from 'react';

function SubmitButton({ onClick }){
    return(
        <div>
            <button onClick={onClick} type="submit" className="h-20 w-120 border-indigo-600 bg-indigo-600 rounded-2xl text-violet-50 text-xl font-bold hover:cursor-pointer hover:shadow-lg">Submit</button>
        </div>
    )
}

export default SubmitButton;