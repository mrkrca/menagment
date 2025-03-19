import React, { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import PopUpCreateProject from "./components/PopUpCreateProject";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState('');

  function handleProjectCreate() {
    setIsPopUpVisible(true);
  }

  function handleCloseModal() {
    setIsPopUpVisible(false);
  }

  function handleNewProject(e) {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject('');
    handleCloseModal();
  }

  function handleProjectCreateNew(e) {
    setNewProject(e.target.value);
  }
  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar 
        onCreateProject={handleProjectCreate}  
        projects={projects}
        />
        <div className="flex flex-grow items-center justify-center">
          <NoProjectSelected 
            onCreateProject={handleProjectCreate} 
            isPopUpVisible={isPopUpVisible} 
            setIsPopUpVisible={setIsPopUpVisible} 
            onClose={handleCloseModal} 
          />
        </div>
        <PopUpCreateProject handleCreateNew={handleProjectCreateNew} handleNew={handleNewProject} isOpen={isPopUpVisible} onClose={handleCloseModal} />
      </div>
    </>
  );
}

export default App;