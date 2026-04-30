import React, {useState, useEffect , useRef} from "react";

function StopWatch(){

    const[isRunning, setIsRunning]= useState(false);
    const[elapsedTime, setElapsedTime] = useState(0);
    const IntervalIdRef =useRef(null);
    const startTimerRef= useRef(0);

    useEffect(()=> {

        if(isRunning){
            IntervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now() - startTimerRef.current)
            })
        }

        return() =>{
            clearInterval(IntervalIdRef.current);
        }
        
    }, [isRunning]);


    function start(){
        setIsRunning(true);
        startTimerRef.current =Date.now() - elapsedTime;


    }
    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formmatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 *60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % (1000) / 10);

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliseconds = String(milliseconds).padStart(2,"0");
        

        return`${hours}:${minutes}:${seconds}:${milliseconds}`;
        
    }

    return(
        <div>
            <div>{formmatTime()}</div>

            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                
            </div>
        </div>
    );
}
export default StopWatch