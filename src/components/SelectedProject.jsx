import React, { useState } from 'react';
import Input from './input';

export default function SelectedProject({ project, deleteProject, updateTasks }) {
  const [task, setTask] = useState('');

  function handleCreateTask(e) {
    setTask(e.target.value);
  }
  function handleCreateTaskClick() {
    if (task.trim() !== '') {
      const updatedTasks = [...(project.tasks || []), task]; 
      updateTasks(updatedTasks);
      setTask(''); 
    }
  }

  function deleteTask(taskToDelete) {
    const updatedTasks = project.tasks.filter(task => task !== taskToDelete);
    updateTasks(updatedTasks); 
  }

  return (
    <div className="w-1/2 h-screen text-stone-700">
      <div className="flex flex-col justify-center">
        <div className="justify-between flex items-center">
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <button onClick={deleteProject}>Delete</button>
        </div>
        <p className="text-sm mb-4 font-semibold opacity-60">{project.date}</p>
        <p className="text-lg mb-4">{project.description}</p>

        <hr />

        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4 text-stone-800">Tasks</h2>
          <div className="flex items-center gap-4">

            <Input
             type="text"
             value={task}
             placeholder="Task"
             handlers={[handleCreateTask]}
             className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          
            <button
              onClick={handleCreateTaskClick}
              className=" text-stone-800 font-bold py-2 px-4 rounded-lg"
            >
              Add Task
            </button>
          </div>
          <div>
                <ul className="mt-4 bg-gray-100 rounded-lg">
        {(project.tasks || []).map((task, index) => (
          <li
            key={index}
            className="flex items-center mb-2 justify-between p-2"
          >
            <span>{task}</span>
            <button
              onClick={() => deleteTask(task)}
              className="text-red-500 hover:text-red-700"
            >
              Clear
            </button>
          </li>
        ))}
    </ul>
          </div>
        </div>
      </div>
    </div>
  );
}