import React, { useState } from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import PopUpCreateProject from "./components/PopUpCreateProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [selectedProject, setSelectedProject] = useState(false);

  function handleProjectSelect() {
    setSelectedProject(true);
  }

  function handleProjectCreate() {
    setIsPopUpVisible(true);
  }

  function handleCloseModal() {
    setIsPopUpVisible(false);
  }

  function handleNewProject(e) {
    e.preventDefault();
    setProjects([...projects, newProject]);
    setNewProject({ name: '', description: '' });
    handleCloseModal();
  }

  function handleProjectCreateNew(e) {
    const { name, value } = e.target;
    setNewProject(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar 
          onCreateProject={handleProjectCreate}  
          projects={projects}
          openProject={handleProjectSelect}
        />
        {selectedProject ?  <SelectedProject /> : <div className="flex flex-grow items-center justify-center">
          <NoProjectSelected 
            onCreateProject={handleProjectCreate} 
            isPopUpVisible={isPopUpVisible} 
            onClose={handleCloseModal} 

          />
        </div> }
       
        <PopUpCreateProject 
          handleCreateNew={handleProjectCreateNew}
          handleNew={handleNewProject}
          isOpen={isPopUpVisible}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
}

export default App;