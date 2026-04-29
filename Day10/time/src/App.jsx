import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  function formatTime(){
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours= hours % 12 || 12;
    return`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    
}

function padZero(number){
    return (number < 10 ? "0" : "") + number;
}


  return (
    <div>
      <h2>Current Time</h2>
      <h1>{formatTime()}</h1>
    </div>
  );
}

export default App;