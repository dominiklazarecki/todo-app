import React from "react";

import './TaskList.scss'
import AddTask from "../AddTask/AddTask";

const TaskList = ({ tasks, onTaskAdded }) => {
    return (
        <div className="taskList">
            {tasks.map((task, index) => (
                <div className="taskList__task" key={index}>
                    <p>{task.name}</p>
                    <p><>{task.desc}</></p>
                    <p>{task.date}</p>
                    <div className="taskList__buttons">
                        <button>Delete</button>
                    </div>
                </div>
            ))}

            <AddTask onTaskAdded={onTaskAdded} />
        </div>

    );
}

export default TaskList;