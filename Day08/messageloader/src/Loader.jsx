import { useEffect, useState } from "react";

function Loader(){

    const [message, SetMessage]= useState(<>Loading... <br/>(Wait 2 sec)</>);

    useEffect(()=> {
       
        setTimeout(() => {
            SetMessage("Data Loaded"); 
        }, 2000);
            
        },[]);
        
    
    return(
        <div> 
            <h1>{message}</h1>
        </div>
    );
}
export default Loader