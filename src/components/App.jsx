import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Statistics from "./Statistic/Statistics";
import { useState } from 'react'
import { Button, Typography, Stack} from '@mui/material'

function App(){
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    function countGood(){
        setGood((prevGood) => {
            return prevGood+1
        })
    }
    function countNeutral(){
        setNeutral((prevNeutral) => {
            return prevNeutral+1
        })
    }
    function countBad(){
        setBad((prevBad) => {
            return prevBad+1
        })
    }
    function countTotalFeedback() {
        const sum = good+neutral+bad; // Обраховуємо суму всіх значень good, neutral, bad
        return sum;
    }
    function countPositiveFeedbackPercentage() {
        const sum = countTotalFeedback();
        const percentage = Math.round(good / sum * 100);
        return percentage;
        
    }
    return (
    <div>
       <Typography variant="h4" sx={{marginBottom:'24px'}}>Please leave feedback</Typography> 
       <FeedbackOptions onClickBad={countBad} onClickNeutral={countNeutral} onClickGood={countGood} />
       {countTotalFeedback() !==0 ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics> : <Notification message="There is no feedback!"></Notification>}
    </div>
    )
}
export default App;