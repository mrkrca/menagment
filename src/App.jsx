import React, { useState , useRef} from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import PopUpCreateProject from "./components/PopUpCreateProject";
import SelectedProject from "./components/SelectedProject";
import moment from 'moment';

function App() {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [projects, setProjects] = useState([]);
//  const [newProject, setNewProject] = useState({ name: '', description: '', date: moment().format('YYYY-MM-DD'), tasks: [] });
  const [selectedProject, setSelectedProject] = useState(null);


  const nameRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();


  function handleProjectSelect(project) {
    setSelectedProject(project);
  }

  function handleProjectCreate() {
    setIsPopUpVisible(true);
  }

  function handleCloseModal() {
    setIsPopUpVisible(false);
  }


  function handleNewProject(e) {
    e.preventDefault();

    
    const newProject = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      date: dateRef.current.value || moment().format('YYYY-MM-DD'),
      tasks: [],
    };

    
    setProjects([...projects, newProject]);

   
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = moment().format('YYYY-MM-DD');

    handleCloseModal(); 
  }

/*
  function handleNewProject(e) {
    e.preventDefault();
    setProjects([...projects, newProject]); 
    setNewProject({ name: '', description: '', date: moment().format('YYYY-MM-DD'), tasks: [] }); 
    handleCloseModal(); 
  }

  function handleProjectCreateNew(e) {
    const { name, value } = e.target;
    setNewProject(prevState => ({
      ...prevState,
      [name]: value, 
    }));
  }
*/
  function handleDeleteProject() {
    const newProjects = projects.filter(project => project.name !== selectedProject.name);
    setProjects(newProjects);
    setSelectedProject(null);
  }

  function handleUpdateTasks(updatedTasks) {
    const updatedProjects = projects.map(project =>
      project.name === selectedProject.name
        ? { ...project, tasks: updatedTasks }
        : project
    );
    setProjects(updatedProjects);
    setSelectedProject({ ...selectedProject, tasks: updatedTasks });
  }

  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar 
          onCreateProject={handleProjectCreate}  
          projects={projects}
          openProject={handleProjectSelect}
        />
        {selectedProject ? (
          <div className="flex flex-grow mt-20 justify-center">
            <SelectedProject
              project={selectedProject || { name: '', description: '', date: '', tasks: [] }}
              deleteProject={handleDeleteProject}
              updateTasks={handleUpdateTasks}
            />
          </div>
        ) : (
          <div className="flex flex-grow items-center justify-center">
            <NoProjectSelected 
              onCreateProject={handleProjectCreate} 
              isPopUpVisible={isPopUpVisible} 
              onClose={handleCloseModal} 
            />
          </div>
        )}
        <PopUpCreateProject 
       //   handleCreateNew={handleProjectCreateNew}
          handleNew={handleNewProject}
          isOpen={isPopUpVisible}
          onClose={handleCloseModal}
          nameRef={nameRef} 
          descriptionRef={descriptionRef}
          dateRef={dateRef}
        />
      </div>
    </>
  );
}

export default App;