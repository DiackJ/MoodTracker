import { useState, useEffect } from 'react';
import MainModal from '../user-input-components/main-modal';

function InputOverlay({ visibility, showForm, handleAverageFetch, updateGraph }){
    if(!visibility){return null;}
    return(
        <div>
            <div className="fixed inset-0 bg-black opacity-65 min-h-full min-w-full z-1"></div>
            <MainModal showForm={showForm} handleAverageFetch={handleAverageFetch} updateGraph={updateGraph} />
        </div>
        
    );
        
}

export default InputOverlay;