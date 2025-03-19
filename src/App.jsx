import React from "react";
import ProjectSidebar from "./components/ProjectSideBar";
import NoProjectSelected from "./components/NoProjectSelected";


function App() {
  return (
    <>
      <div className="flex h-screen">
        <ProjectSidebar />
        <div className="flex flex-grow items-center justify-center">
          <NoProjectSelected />
        </div>
      </div>
    </>
  );
}

export default App;
