import React from 'react';

const ProjectList = () => {
  // Mock project data
  const projects = [
    { id: 1, name: 'Project 1', description: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'Project 2', description: 'Consectetur adipiscing elit' },
    // Add more projects if needed
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold text-white mt-4">Projects</h2>
      <ul className="mt-4">
        {projects.map((project) => (
          <li key={project.id} className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-lg font-bold text-white">{project.name}</h3>
            <p className="text-gray-400">{project.description}</p>
            {/* Buttons for editing, deleting, or accessing more details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
