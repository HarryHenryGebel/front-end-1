import React, { useState, useEffect } from "react";
import moment from "moment";


function CountDown(props) {
    const {potluck} = props

    const date = potluck.date;
    const time = potluck.time;

    const beginning = `${date}, ${time}`

    //beginning will go into the useEffect

const emptyTimer = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
}

const [timer,setTimer] = useState(emptyTimer)

useEffect(()=>{
    setInterval(() => {
        // const { timeTillDate, timeFormat } = this.props;
        const then = moment("05 26 2019, 6:00 am", "MM DD YYYY, h:mm a");
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');

        setTimer({ days, hours, minutes, seconds });
    }, 1000);
})


  
  return (

      <div id="clock">
{timer.days} Days {timer.hours} Hours {timer.minutes} Minutes {timer.seconds} Seconds!</div>


  );
}

export default CountDown;
