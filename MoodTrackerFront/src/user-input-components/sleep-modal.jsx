import SleepOptionDiv from '../reusable/sleep-option-div';

function SleepModal({ min, max, handleSleepSelect }){
   
    return(
        <div className="">
            <div className="font-[Nunito]"></div> 
            <div className="text-3xl font-semibold mb-10">Log your sleep</div>
            <div className="mb-5 text-2xl font-semibold">How many hours did you sleep last night?</div>
            <div>
                <SleepOptionDiv minValue={9} maxValue={0} hoursNum={"9+"} onClick={handleSleepSelect} minSelected={min} maxSelected={max}/>
            </div>
            <div>
                <SleepOptionDiv minValue={7} maxValue={8} hoursNum={"7-8"}  onClick={handleSleepSelect} minSelected={min} maxSelected={max}/>
            </div>
            <div>
                <SleepOptionDiv minValue={5} maxValue={6} hoursNum={"5-6"} onClick={handleSleepSelect} minSelected={min} maxSelected={max}/>
            </div>
            <div>
                <SleepOptionDiv minValue={3} maxValue={4} hoursNum={"3-4"} onClick={handleSleepSelect} minSelected={min} maxSelected={max}/>
            </div>
            <div>
                <SleepOptionDiv minValue={0} maxValue={2} hoursNum={"0-2"} onClick={handleSleepSelect} minSelected={min} maxSelected={max}/>
            </div>
        </div>
    )
}

export default SleepModal;