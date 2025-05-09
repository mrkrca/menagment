
import React, {useRef} from 'react';
import Input from './input';

export default function PopUpCreateProject({ isOpen, onClose, handleNew, handleCreateNew,  nameRef, descriptionRef, dateRef }) {
  if (!isOpen) return null;

  return (
    <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create a new project
            </h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={onClose}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1"/>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleNew}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
                <Input
                  name="name" 
                  handlers={[handleCreateNew]}
                  type="text"
                  placeholder="Project Name"
                  id="project-name" 
                  ref={nameRef}
                  value={nameRef}
                />
              </div>
              <div>
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Description</label>
                <Input
                  name="description" 
                  handlers={[handleCreateNew]}
                  type="text"
                  placeholder="Project Description"
                  id="project-description" 
                  ref={descriptionRef}
                  value={descriptionRef}
                />
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Date</label>
                <Input
                  name="date"
                  handlers={[handleCreateNew]}
                  type="date"
                  placeholder="Project Date"
                  id="project-date"
                  ref={dateRef}
                  value={dateRef}
                />
              </div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Project</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}