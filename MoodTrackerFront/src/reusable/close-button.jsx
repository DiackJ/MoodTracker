import { useState } from 'react';
import InputOverlay from './input-overlay';

function CloseButton({ closeForm, updateGraph }){

    return(
        <div>
            <button  onClick={() => {updateGraph(); closeForm();}} type="button" className="h-fit w-fit px-5 py-3 border-indigo-600 bg-indigo-600 rounded-2xl text-violet-50 text-xl font-bold hover:cursor-pointer hover:shadow-lg">Close</button>
        </div>
    )
}

export default CloseButton;