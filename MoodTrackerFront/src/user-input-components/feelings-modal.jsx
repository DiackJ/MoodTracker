import FeelingOptionDiv from '../reusable/feeling-option-div';

function FeelingsModal({ handleSelectedFeelings, feelings }){
    return(
        <div className="font-[Nunito]">
            <div className="text-3xl mb-10 font-semibold">Log your feelings</div>
            <div className="mb-5">
                <span className="text-2xl font-semibold">How are you feeling today?</span>
                <span className="text-zinc-400 ml-3 font-medium italic">(select up to three.)</span>
            </div>
            <div className="inline-flex px-5">
                 <div className="mr-5 -ml-4">
                    <FeelingOptionDiv feeling={"anxious"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mr-5">
                    <FeelingOptionDiv feeling={"calm"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
               <div>
                    <FeelingOptionDiv feeling={"confident"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-15 -ml-105 mr-5">
                    <FeelingOptionDiv feeling={"content"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className='mt-15 mr-5'>
                    <FeelingOptionDiv feeling={"disappointed"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-15">
                    <FeelingOptionDiv feeling={"down"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-30 -ml-115 mr-5">
                    <FeelingOptionDiv feeling={"excited"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-30 mr-5">
                    <FeelingOptionDiv feeling={"frustrated"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-30 mr-5">
                    <FeelingOptionDiv feeling={"grateful"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-45 -ml-116 mr-5">
                    <FeelingOptionDiv feeling={"hopeful"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-45 mr-5">
                    <FeelingOptionDiv feeling={"irritable"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-45 mr-5">
                    <FeelingOptionDiv feeling={"joyful"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-45 mr-5">
                    <FeelingOptionDiv feeling={"lonely"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-60 -ml-141 mr-5">
                    <FeelingOptionDiv feeling={"motivated"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-60 mr-5">
                    <FeelingOptionDiv feeling={"optimistic"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-60 mr-5">
                    <FeelingOptionDiv feeling={"overwhelmed"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-75 -ml-136 mr-5 mb-5">
                    <FeelingOptionDiv feeling={"peaceful"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-75 mr-5 mb-5">
                    <FeelingOptionDiv feeling={"restless"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-75 mr-5 mb-5">
                    <FeelingOptionDiv feeling={"stressed"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
                <div className="mt-75 mb-5">
                    <FeelingOptionDiv feeling={"tired"} onClick={handleSelectedFeelings} selected={feelings}/>
                </div>
            </div>
            <div>
                {feelings.length > 3 && (<p className="text-rose-700 mb-5 ml-2">Please select only three items.</p>)}
            </div>
        </div>
    )
}

export default FeelingsModal;