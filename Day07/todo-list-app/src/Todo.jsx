import React, {useState} from "react";

function Todo(){

    const [task, setTask]=useState([]);
    const [newtask, setNewTask]=useState("");
    
    function handleInput(event){
        setNewTask(event.target.value);
    }
    function addTask(){
            if(newtask.trim() !== ""){
                setTask(t => [...t, newtask]);
                setNewTask("");
            }

    }
    function deleteTask(index){
        const updatedTask = task.filter((_, i) => i !== index);
        setTask(updatedTask);

    }
    function moveTaskUp(index){
        if(index > 0 ){
            const updatedTask= [...task];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            setTask(updatedTask)
        }

    }
    function moveTaskDown(index){
        if(index < task.length - 1){
            const updatedTask= [...task];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            setTask(updatedTask)
        }
    }

    return(
        <div className="to-do-list">
            <h1>Todo List</h1>
            <div>
                <input type="text"
                        placeholder="enter new task"
                        value={newtask}
                        onChange={handleInput}>
                        </input>
            <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {task.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=> deleteTask(index)}>Delete</button> 
                    <button className="move-button" onClick={()=> moveTaskUp(index)}>👆</button> 
                    <button className="move-button" onClick={()=> moveTaskDown(index)}>👇</button> 
                </li>
                )}
            </ol>
            
        </div>
    );
}
export default Todo