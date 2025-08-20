import SelectorButton from './selector-button';


const bgColors = {
    yellow: "bg-amber-300",
    green: "bg-green-300",
    blue: "bg-blue-300",
    violet: "bg-violet-300",
    rose: "bg-rose-300",
};

function MoodOptionDiv({ handleMoodNum, moodVal, moodText, moodIcon, color, onClick, selected }){
    const isSelected = selected === moodText; //check if mood of div is equal to what was selected

    //onClick takes mood as prop so when the div is clicked selected becomes the mood of that div
    //after checking if the mood of the div matches what is selected, pass that bool to the selector button so if its true show the selected circle
    return(
        <div onClick={()=> {onClick(moodText); handleMoodNum(moodVal);}} className={isSelected ? "bg-violet-200 px-5 border-2 border-indigo-500 h-15 mb-5 rounded-2xl" : "bg-white px-5 border border-gray-200 h-15 mb-5 rounded-2xl hover:bg-violet-200 hover:cursor-pointer hover:border-zinc-400"}>
            <div className="flex items-center justify-between mt-3">
                <div className="flex">
                    <SelectorButton selected={isSelected}/>
                    <p className="ml-5 text-2xl font-semibold">{moodText}</p>
                </div>
                <div className="">
                    <i className={`${moodIcon} ${bgColors[color]} rounded-full text-4xl`}></i>
                </div>
            </div>                
        </div> 
    )
}

export default MoodOptionDiv;