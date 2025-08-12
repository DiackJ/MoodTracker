
const month = new Date().toLocaleDateString("en-US", {month: "short"});
const day = new Date().toLocaleDateString("en-Us", {day: "numeric"});

function MoodBar(){
    return(
        <div className="flex col-auto ml-20">
            <div className="absolute -mt-62 h-50 w-8 rounded-b-full rounded-t-full border border-amber-300 bg-amber-300">
                <i className="fa-regular fa-face-grin bg-white rounded-full text-3xl mt-0.5"></i>
            </div>
            <div className="absolute ml-1 -mt-10 text-gray-500">
                <p>{month}</p>
                <p>{day}</p>
            </div>
        </div>
    )
}

export default MoodBar;