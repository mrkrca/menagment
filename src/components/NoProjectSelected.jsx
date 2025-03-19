import React from "react";
import PopUpCreateProject from "./PopUpCreateProject";
import notSelectedPicture from "../assets/no-projects.png";
function NoProjectSelected({ onCreateProject, isPopUpVisible, onClose }) {
  return (
    <>

      <div className="flex flex-col items-center justify-center gap-5">
        <img className="w-1/4" src={notSelectedPicture} alt="photo" />
        <h1 className="text-zinc-900 font-semibold text-4xl">No project selected</h1>
        <p className="text-xl">Please select a project or get started with the new one</p>
        <button 
          data-modal-target="authentication-modal" 
          data-modal-toggle="authentication-modal" 
          onClick={onCreateProject} 
          className="flex bg-gray-600 w-fit p-3 rounded-xl hover:bg-gray-700 text-gray-300 font-semibold text-xl"
        > 
          Create new project
        </button>
      </div>

      {isPopUpVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <PopUpCreateProject isOpen={isPopUpVisible} onClose={onClose} />
        </div>
      )}
    </>
  );
}

export default NoProjectSelected;