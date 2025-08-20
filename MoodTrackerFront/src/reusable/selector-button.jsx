import { useState } from 'react';
import InnerSelector from './inner-selector';

function SelectorButton({ selected }){
    return(
    <div>
        <div className="border border-gray-300 h-7 w-7 rounded-2xl bg-white pl-1.5 pt-1.5">
            {selected && (
                <InnerSelector />
            )}
        </div>
    </div>
    )
}

export default SelectorButton;

//{selected && (<InnerSelector />)}