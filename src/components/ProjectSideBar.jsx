
import React from 'react';




function ProjectSidebar({onCreateProject}) {
  return (
    <div className=" relative flex flex-col bg-clip-border rounded-xl bg-zinc-900 text-gray-700 h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
  <div className="mb-2 p-4">
    <h5 className="block antialiased tracking-normal font-sans text-2xl font-bold leading-snug text-white">YOUR PROJECTS</h5>
  </div>
  <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
  
    <button onClick={onCreateProject} className=" flex bg-gray-600 w-fit p-3 rounded-xl hover:bg-gray-700 text-white font-semibold">+ ADD PROJECT</button>

  </nav>
</div>

  );
}

export default ProjectSidebar;