import React from 'react';

function ProjectSidebar({ onCreateProject, projects }) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-zinc-900 text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <h5 className="block antialiased tracking-normal font-sans text-2xl font-bold leading-snug text-white">YOUR PROJECTS</h5>
      </div>
      <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
        <button onClick={onCreateProject} className="flex bg-gray-600 w-fit p-3 rounded-xl hover:bg-gray-700 text-white font-semibold">+ ADD PROJECT</button>
      </nav>
      <ul className='flex flex-col gap-2 p-2 font-sans text-base font-normal text-gray-700'>
        {projects.map((project, index) => (
          <li key={index} className="flex w-fit items-center justify-between p-2 bg-gray-100 rounded-lg hover:bg-gray-400">
            <button>{project}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectSidebar;