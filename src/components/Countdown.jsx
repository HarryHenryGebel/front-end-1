import React, { useState, useEffect } from "react";
import moment from "moment";

function CountDown(props) {
  const emptyTimer = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
  };

  const [timer, setTimer] = useState(emptyTimer);

  useEffect(() => {
    setInterval(() => {
      // const { timeTillDate, timeFormat } = this.props;
      const then = moment("05 26 2019, 6:00 am", "MM DD YYYY, h:mm a");
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");

      setTimer({ days, hours, minutes });
    }, 10000);
  });

  return (
    <span id="clock">
      {timer.days} Days {timer.hours} Hours and {timer.minutes} Minutes!
    </span>
  );
}

export default CountDown;
