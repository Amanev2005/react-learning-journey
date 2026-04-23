import React, { useState } from "react";

function TaskManager() {

    const [user, setUser] = useState({
        name: "Aman",
        role: "Student"
    });

    const [task, setTask] = useState([
        { id: 1, text: "Task 1", completed: false }
    ]);

    const [input, setInput] = useState("");

    function changeUser() {
        setUser(u => ({ ...u, role: "Software" }));
    }

    function addTask() {
        const newTask = {
            id: Date.now(),
            text: input,
            completed: false
        };

        setTask(t => [...t, newTask]);
        setInput("");
    }

    function addInput(e) {
        setInput(e.target.value);
    }

    function toggleTask(id) {
        setTask(t =>
            t.map(task =>  task.id === id ? { ...task, completed: !task.completed }: task ));
    }

    return (
        <div>
            <p>User Info</p>
            <p>({user.name} {user.role})</p>
            <button onClick={changeUser}>Change Role</button>

            <h2>Tasks:</h2>

            {task.map(task => (
                
                <div key={task.id}>
                    <span
                        
                        onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            cursor: "pointer"
                        }}
                    >
                        {task.text}
                     
                    </span>
                </div>
            ))}

            <input
                value={input}
                onChange={addInput}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}

export default TaskManager;