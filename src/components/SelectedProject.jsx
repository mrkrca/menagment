import React from 'react';

export default function SelectedProject({ project, deleteProject }) {
  return (
    <div className="w-1/2 h-screen">
      <div className="flex flex-col justify-center ">
        <div className='justify-between flex items-center'>
          <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
          <button onClick={deleteProject}>Delete</button>
        </div>
        <p className="text-lg mb-4">{project.description}</p>
        <hr />

        <div className="mt-4">
          <h2 className="text-2xl text-black font-bold mb-4">Tasks</h2>
          <div className="flex items-center gap-4">
            <input 
              type="text" 
              className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              placeholder="Task" 
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}