import React from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";

function handleProjectCreate() {
  console.log("Create project");
};

function App() {
  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar onCreateProject={handleProjectCreate}/>
        <div className="flex flex-grow items-center justify-center">
          <NoProjectSelected onCreateProject={handleProjectCreate}/>
        </div>
      </div>
    </>
  );
}

export default App;
