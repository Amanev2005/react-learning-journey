import React, {useState} from "react";


function ColourPicker(){

    const [color, setColor]= useState("#FFFFFF");
    const [history, setHistory] = useState([]);

    function handleColor(event){  
        const newcolor= (event.target.value);
        setColor(newcolor)
        setHistory(h => {
            if(h[0] === newcolor) return h; // prevent duplicate
            return [newcolor, ...h.slice(0, 4)]});
    }

    return(
        <>
        <h1>Colour picker</h1>
        <div className="color-display" style={{backgroundColor : color}}>
            <p>Selected color : {color}</p>
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColor} ></input>
        <h3>Recent colours: </h3>
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
     {history.map((c, index) => (
    <div
      key={index}
      onClick={() => setColor(c)}
      style={{
        width: "30px",
        height: "30px",
        backgroundColor: c,
        border: "1px solid black",
        cursor: "pointer"
      }}
    ></div>
  ))}
</div>      


        </>
    );
}

export default ColourPicker