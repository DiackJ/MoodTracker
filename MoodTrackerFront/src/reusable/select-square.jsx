import { useState } from 'react';
import Highlight from './select-square-higlight';
import SelectCheck from './select-check';

function SelectSquare({ select }){

    return(
        <div className="-mt-6">
            {select && (<Highlight />)}
            <div className="border ml-1 mt-1 absolute border-gray-400 bg-indigo-50 h-4 w-4 rounded-sm">
                {select && (<SelectCheck select={select}/>)}
            </div>
        </div>
    )
}

export default SelectSquare;