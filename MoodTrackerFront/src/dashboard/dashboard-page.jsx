import { useState, useEffect } from 'react';
import Header from './dash-header';
import Logo from './logo';
import LogMoodButton from './log-mood-button';
import Profile from './profile';
import AverageContainer from './average-container';
import MoodSleepContainer from './mood-sleep-container';
import axios from 'axios';

function Dashboard(){
    //user info
    const [user, setUser] = useState();

    //mood and sleep averages
    const [averageMood, setAverageMood] = useState(0);
    const [averageSleep, setAverageSleep] = useState(0);

    // //mood, sleep and date for graph
    // const [mood, setMood] = useState();
    // const [sleep, setSleep] = useState();
    // const []
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/user", {
            method: "GET",
            credentials: "include"
        })
        .then(res => {
            if(!res.ok){
                throw new Error(`HTTP error: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            setUser(data);
        })
        .catch(err => {
            console.error("Error fetching user",err);
        })
    }, []); 

    const getMoodSleepAverages = () => {
        console.log("fetching averages...");
        axios.get("http://localhost:8080/average-mood-sleep", {withCredentials: true})
            .then(res => {
                setAverageMood(res.data.averageMood);
                setAverageSleep(res.data.averageSleep);
            })
            .catch(err => console.error("error fetching averages: ", err));
            console.log("mood: " + averageMood);
            console.log("sleep: " + averageSleep);
    };
        // console.log(averageMood);
        // console.log(averageSleep);

    useEffect(() => {
        getMoodSleepAverages();
    },[]);

    //graph
    useEffect(() => {
            fetch("http://localhost:8080/mood-sleep", {
                method: "GET",
                credentials: "include",
                headers :{
                    "Content-Type": "application/json"
                }
            })
            .then(res => {
                if(!res === 200){
                    console.error(`http response error: ${res.status}`);
                }
                return res.json();
            })
            .then(dtoList => {
                setGraphData(dtoList);
            })
        
         .catch(err => console.error("error fetching for graph: ", err));
    },[]); 

    
    return (
        <div id="dashboard-container">
            <div id="logo-container" className="flex justify-between">
                <Logo />
                <div>
                    <Profile userName={user?.name} userEmail={user?.email} />
                </div>
            </div>
            <div id="header-container">
                <Header userName={user?.name}/>
            </div>
            <div>
                <LogMoodButton handleAverageFetch={getMoodSleepAverages}/>
            </div>
            <div className="flex justify-center">
                <AverageContainer averageMood={averageMood} averageSleep={averageSleep}/>
                <MoodSleepContainer data={graphData}/>
            </div>
        </div>
    )
}

export default Dashboard;