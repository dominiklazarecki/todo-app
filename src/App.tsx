import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import TaskList from './components/TaskList/TaskList';




interface Task {
  name: string;
  desc: string;
  date: string;
}



export const mockedTaskList: Task[] = [{
  name: "pójść na siłkę",
  desc: "dupa1",
  date: Date().slice(4, 24),
}, {
  name: "pójść na siłkę",
  desc: "dupa1",
  date: Date().slice(4, 24),
}, {
  name: "pójść na siłkę",
  desc: "dupa1",
  date: Date().slice(4, 24),
},
{
  name: "pójść na siłkę",
  desc: "dupa1",
  date: Date().slice(4, 24),
}
]


const App = () => {

  const [taskList, setTaskList] = useState<Task[]>(mockedTaskList)

  const handleTaskAdded = (task) => {
    setTaskList((prev) => {
      return [...prev, task]
    })
  }


  return (
    <div className="App">
      <h1>ToDoApp</h1>
      <TaskList tasks={taskList} onTaskAdded={handleTaskAdded} />

    </div>
  )
}

export default App;
