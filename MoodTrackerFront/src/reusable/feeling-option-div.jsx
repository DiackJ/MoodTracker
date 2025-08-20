import SelectSquare from './select-square';

const feelingsList = {
    anxious: "Anxious",
    calm: "Calm",
    confident: "Confident",
    content: "Content",
    disappointed: "Disappointed",
    down: "Down",
    excited: "Excited",
    frustrated: "Frustrated",
    grateful: "Grateful",
    hopeful: "Hopeful",
    irritable: "Irritable",
    joyful: "Joyful",
    lonely: "Lonely",
    motivated: "Motivated",
    optimistic: "Optimistic",
    overwhelmed: "Overwhelmed",
    peaceful: "Peaceful", 
    restless: "Restless", 
    stressed: "Stressed",
    tired: "Tired",
};

function FeelingOptionDiv({ feeling, onClick, selected }){
    const isSelected = selected.includes(feeling);

    
    return(
        <div onClick={() => onClick(feeling)} className={isSelected ? "border border-indigo-600 bg-indigo-50 h-fit w-fit px-3 py-1 flex items-center rounded-sm hover:cursor-pointer" : "border border-gray-300 bg-indigo-50 h-fit w-fit px-3 py-1 flex items-center rounded-sm hover:cursor-pointer"}>
            <SelectSquare select={isSelected}/>
            <p className="ml-8 text-xl">{feelingsList[feeling]}</p>
        </div>
    )
}

export default FeelingOptionDiv;