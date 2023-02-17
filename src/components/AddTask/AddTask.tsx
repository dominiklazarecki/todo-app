import React, { useState } from "react";

import './AddTask.scss';

const AddTask = ({ onTaskAdded }) => {

    const [isActive, setIsActive] = useState<boolean>(true);
    const [taskInput, setTaskInput] = useState<string>("");
    const [descInput, setDescInput] = useState<string>("");

    const handleDisplay = () => {
        setIsActive(!isActive)
    }

    const handleAdd = () => {
        handleDisplay();
        const newTask = { name: taskInput, desc: descInput }
        // const newMockedTaskList = [...mockedTaskList, newTask]

        // mockedTaskList.length = 0;

        // return newMockedTaskList

        onTaskAdded(newTask)
    }

    return (
        <div className="addTask">
            {isActive
                ?
                <div className="addTask__button" onClick={handleDisplay}>+</div>
                :
                <form className="addTask__form">
                    <label htmlFor="task">Task: </label>
                    <input onChange={(e) => setTaskInput(e.target.value)} type="text" id="task" />

                    <label htmlFor="desc">Desc: </label>
                    <input onChange={(e) => setDescInput(e.target.value)} type="text" id="desc" />

                    <button onClick={handleAdd}>Add</button>
                </form>}
        </div>
    );
}

export default AddTask;