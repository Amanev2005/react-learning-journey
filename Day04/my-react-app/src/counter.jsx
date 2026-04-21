import React, {useState} from "react";

function Counter(){

    const [count, setCount]= useState(0);

 const counterIncrement = () => {
        setCount(count + 1 );
    }
    
const counterDecrement =() => {
        setCount(count - 1 );
    }

        return(
            <>
            <p>{count}</p>
            <button onClick={counterIncrement}> + </button>
            <button onClick={counterDecrement}> - </button>
            </>
            
        );
}

export default Counter