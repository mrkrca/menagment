
import React from "react";

export default function Input({handlers =[], placeholder, type ,name, id }) {
    return (
        <input
        type={type}
       
        name={name}
        className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder={placeholder}
        onChange={(e) => handlers.forEach((handler) => handler(e))} 
        id={id}
        />
    );
}