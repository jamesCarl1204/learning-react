import React, { useState } from 'react'


function ToDoList(){
   const [tasks, setTask] = useState(["eereraref"]);
   const [newTask, setNewTask] = useState("");

   function handleInputChange(e) {
    setNewTask(e.target.value)
   }

   function deleteTask(index) {
    const updatedTasks = tasks.filter((e,i) => i !== index)
    setTask(updatedTasks)
}
   function moveTaskUp(index) {
    if(index > 0) {
        const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index-1], updatedTasks[index]]
          setTask(updatedTasks)
        }
   }
   function moveTaskDown(index) {
        if(index < tasks.length -1) {
        const updatedTasks = [...tasks];
         [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index+ 1], updatedTasks[index]]
          setTask(updatedTasks)
        }
   }
   function addTask() {
    if(newTask.trim() !== "") {
      setTask(t => [...t, newTask]);
      setNewTask("")
    }
   }
   return(<>
   <div className="to-do-list">
          
          <h1>Todo-List</h1>
          
          <div>
            <input
            type="text"
            placeholder="enter a task..."
            value={newTask}
            onChange={handleInputChange}/>

            <button
            className="add-btn" onClick={() => addTask()}>Add</button>
           <ol>
            {tasks.map((task, index) => 
               <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-btn" onClick={() => moveTaskUp(index)}>UP</button>
                <button className="move-btn" onClick={() => moveTaskDown(index)}>DOWN</button>
               </li>)}
           </ol>
          </div>
   </div>
   </>)
}

export default ToDoList