import SelectorButton from './selector-button';

function SleepOptionDiv({ minValue, maxValue, hoursNum, onClick, minSelected, maxSelected }){
    const isMinSelected = minSelected === minValue;
    const isMaxSelected = maxSelected === maxValue;


    return(
        <div onClick={()=>onClick(minValue, maxValue)} className={ isMinSelected && isMaxSelected ? "bg-violet-200 px-5 border-2 border-indigo-500 h-15 mb-5 rounded-2xl flex items-center" : "bg-white px-5 border border-gray-200 h-15 mb-5 rounded-2xl hover:bg-violet-200 hover:cursor-pointer hover:border-zinc-400 flex items-center"}>
            <SelectorButton selected={isMinSelected}/>
            <p className="text-xl font-semibold ml-3">{hoursNum} hours</p>
        </div>
    )
}

export default SleepOptionDiv;
