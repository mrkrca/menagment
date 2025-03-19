import React, {useState} from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import PopUpCreateProject from "./components/PopUpCreateProject";





function App() {




  function handleProjectCreate() {
    console.log("Create project");
    setIsPopUpVisible(true);
  };
  

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
