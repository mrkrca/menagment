import React, { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import PopUpCreateProject from "./components/PopUpCreateProject";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);

  function handleProjectCreate() {
    setIsPopUpVisible(true);
  }

  function handleCloseModal() {
    setIsPopUpVisible(false);
  }

  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar onCreateProject={handleProjectCreate} />
        <div className="flex flex-grow items-center justify-center">
          <NoProjectSelected 
            onCreateProject={handleProjectCreate} 
            isPopUpVisible={isPopUpVisible} 
            setIsPopUpVisible={setIsPopUpVisible} 
            onClose={handleCloseModal} 
          />
        </div>
        <PopUpCreateProject isOpen={isPopUpVisible} onClose={handleCloseModal} />
      </div>
    </>
  );
}

export default App;