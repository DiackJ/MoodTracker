import MoodOptionDiv from '../reusable/mood-option-div';

function MoodModal({ handleMoodNum, selectMood, handleSelectedMood }){
    return(
        <div className="font-[Nunito]">
            <div className="mb-10 text-3xl font-semibold">Log your mood</div>
            <div className="mb-5 text-2xl font-semibold">How was your mood today?</div>
            <div id="mood-container" className="">
                <div>
                    <MoodOptionDiv handleMoodNum={handleMoodNum} moodVal={5} moodText={"Very happy"} moodIcon={"fa-regular fa-face-grin"} color={"yellow"} onClick={handleSelectedMood} selected={selectMood}/>
                </div>
                <div>
                    <MoodOptionDiv handleMoodNum={handleMoodNum} moodVal={4} moodText={"Happy"} moodIcon={"fa-regular fa-face-smile"} color={"green"} onClick={handleSelectedMood} selected={selectMood}/>
                </div>
                <div>
                    <MoodOptionDiv handleMoodNum={handleMoodNum} moodVal={3} moodText={"Neutral"} moodIcon={"fa-regular fa-face-meh"} color={"blue"} onClick={handleSelectedMood} selected={selectMood}/>
                </div>
                <div>
                    <MoodOptionDiv handleMoodNum={handleMoodNum} moodVal={2} moodText={"sad"} moodIcon={"fa-regular fa-face-frown"} color={"violet"} onClick={handleSelectedMood} selected={selectMood}/>
                </div>
                <div>
                    <MoodOptionDiv handleMoodNum={handleMoodNum} moodVal={1} moodText={"Very sad"} moodIcon={"fa-regular fa-face-sad-tear"} color={"rose"} onClick={handleSelectedMood} selected={selectMood}/>
                </div>
            </div>
        </div>
    )
}

export default MoodModal;