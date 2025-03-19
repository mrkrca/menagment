import React from "react";


function NoProjectSelected({onCreateProject}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-zinc-900 font-semibold text-4xl">No project selected</h1>
      <p className="text-xl">Please select a project or get started with the new one</p>
      <button onClick={onCreateProject} className="flex bg-gray-600 w-fit p-3 rounded-xl hover:bg-gray-700 text-gray-300 font-semibold text-xl"> Create new project</button>
    </div>
  );
}

export default NoProjectSelected;