import { useState } from 'react';

function ProgressBar({ barStep, currentStep }){
    //if step of progress bar matches current step of user, change bg color
    const isCurrentStep = barStep <= currentStep;

    return(
        <div className="absolute mt-13">
            <div className={isCurrentStep ? "border border-violet-50 h-2 w-20 rounded-full bg-indigo-600" : "border border-violet-50 h-2 w-20 rounded-full bg-gray-300"}></div>
        </div>
    )
}

export default ProgressBar;