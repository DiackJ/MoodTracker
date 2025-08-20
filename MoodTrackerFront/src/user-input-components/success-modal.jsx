import { useState } from 'react';

function SuccessModal(){
    return(
        <div className="font-[Nunito]">
            <div className="mb-10 text-3xl font-semibold">Log your mood</div>
            <div className="mb-5 text-2xl font-semibold flex justify-center">
                <i className="fa-solid fa-check rounded-full px-1.5 py-1 mr-2 text-md text-indigo-50 bg-indigo-500"></i>
                <span>Logged mood successfully!</span>
            </div>
        </div>
    )
}

export default SuccessModal;