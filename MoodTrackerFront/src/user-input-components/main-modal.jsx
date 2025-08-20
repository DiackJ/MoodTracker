import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ContinueButton from './continue-button';
import MoodModal from './mood-modal';
import SleepModal from './sleep-modal';
import FeelingsModal from './feelings-modal';
import TextInput from './daily-text-input';
import SuccessModal from './success-modal';
import CloseButton from '../reusable/close-button';
import SubmitButton from '../reusable/submit-button';
import ExitButton from '../reusable/exit-button';
import ProgressBar from '../reusable/progress-bar';

//this will hold the form data and useStates for all child modals 

function MainModal({ showForm, handleAverageFetch, updateGraph }){
    //mood data handling
    const [moodText, setSelectedMood] = useState(""); //string of selected mood
    const handleSelectedMood = val => {
        setSelectedMood(val); //set selected to the selsected mood and pass as prop 
    };
//actual number value to use for averaging
    const [mood, setMoodVal] = useState(0);
    const handleMoodVal = val => {
        setMoodVal(val); 
    }

    //feelings data handling
    const [feelings, setFeelings] = useState([]);

    const handleSelectedFeelings = (selectedVal) => {
        setFeelings((prev) => {
            if(prev.includes(selectedVal)){
                return prev.filter(i => i !== selectedVal);
            }else{
                return [...prev, selectedVal];
            }
        });
    };

    //sleep data handling
    const [minSleep, setMinSelected] = useState(0);
     const [maxSleep, setMaxSelected] = useState(0)

     const handleSleepSelect = (minVal, maxVal) => {
         setMinSelected(minVal);
         setMaxSelected(maxVal);
     }

    //reflection input handling
    const [reflection, setReflection] = useState("");

    //handle steps to render each modal
    const [step, setStep] = useState(1); 
    const totalSteps = 5;
    const handleStep = () => {
        setStep(prev => prev + 1); 
    }

    const handleSubmit = async () => {
        const formData = {
            dailyLog: {
                mood,
                reflection,
                minSleep,
                maxSleep 
            },
            feelings
        };

        console.log(formData); 

        try{
            const res = await fetch("http://localhost:8080/log-mood", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                credentials: "include",
                body: JSON.stringify(formData)
            });
            if(res.status === 200){
                console.log("mood logged");
                await handleAverageFetch(); //fetch the mood
            }else{
                const err = res.text();
                console.error("error logging mood: ", err); 
            }

        }catch (err){
            console.error("network error: ",err);
        }
    }

    //progressBar: index = step each bar represents, currentStep = current setp of user
    return(
        <div className="flex justify-center -mt-40">
            <div className="font-[Nunito] py-5 px-5 absolute border border-white rounded-2xl h-fit w-fit bg-violet-50 z-100 opacity-100">
                <div className="flex justify-end">
                    {step !== totalSteps && (<ExitButton closeForm={showForm}/>)}    
                </div>
                { step !== totalSteps && (
                    <div className="flex gap-22">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s}>
                            <ProgressBar barStep={s} currentStep={step}/>
                        </div>
                        
                        ))}
                    </div>
                )}
                <AnimatePresence mode="wait" >
                    <motion.div key={step} 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity : 0, x: -10 }}
                        transition={{ duration: 0.1 }}
                    >
                        { step === 1 && (<MoodModal handleMoodNum={handleMoodVal} moodVal={mood} selectMood={moodText} handleSelectedMood={handleSelectedMood}/>) }
                        { step === 2 && (<FeelingsModal handleSelectedFeelings={handleSelectedFeelings} feelings={feelings}/>) }
                        { step === 3 && (<TextInput text={reflection} setText={setReflection}/>) }
                        { step === 4 && (<SleepModal min={minSleep} max={maxSleep} handleSleepSelect={handleSleepSelect}/>) }
                        { step === 5 && (<SuccessModal />) }
                    </motion.div>
                </AnimatePresence>
                <div onClick={handleStep} className='flex justify-center'>
                    { step < totalSteps - 1 && (<ContinueButton/>) }
                    { step === totalSteps - 1 && (<SubmitButton onClick={handleSubmit}/>) }
                </div>
                <div className="flex justify-center">
                    { step === totalSteps && (<CloseButton mood={moodText} closeForm={showForm} updateGraph={updateGraph}/>) }
                </div>
            </div>
        </div>
    );
}

export default MainModal;