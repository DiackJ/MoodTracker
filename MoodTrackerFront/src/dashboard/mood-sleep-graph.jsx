
import { Bar } from 'react-chartjs-2';
import testData from '../testData.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



function MoodSleepGraph({ data }){

const moodColors = (m) => {
    switch(m){
        case 5:
            return '#ffd230';//very happpy, amber 300
        case 4:
           return '#7bf1a8';//happy, green 300
        case 3:
           return '#8ec5ff';//neutral, blue 300
        case 2:
           return '#c4b4ff';//sad, violet 300
        case 1:
            return '#ffa1ad';//very sad, rose 300
    };
};

const sleep = data.map(d => d.sleep);
const date = data.map(d => d.date);
const mood = data.map(d => moodColors(d.mood));

 const chartData ={
     labels: date, //x-axis for dates
     datasets: [
         {
             data: sleep, //y-axis for sleep
             backgroundColor: mood, //set bg colors based on mood
             barThickness: 10,
        
         },
     ],
    
 };

const options ={
    plugins: {
        legend: { //get rid of default title
            display: false
        }
    },
     scales: {
         x:{
             grid:{
                 display: false,
             },
             //offset: false,
         },
         y: {
            beginAtZero: true
         }
     },
};

console.log(data);

    return(
        <div>
           <div className="">
              <Bar data={chartData} options={options}/>
              
           </div>
           
        </div>
    )
}


export default MoodSleepGraph;