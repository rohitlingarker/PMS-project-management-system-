import React from 'react';

const ProjectDetails = () => {
  // Mock project details
  const project = {
    id: 1,
    name: 'Project 1',
    description: 'Lorem ipsum dolor sit amet',
    assignedMembers: ['User 1', 'User 2'],
    dueDate: '2023-06-30',
    tasks: [
      { id: 1, name: 'Task 1', assignee: 'User 1', status: 'In Progress' },
      { id: 2, name: 'Task 2', assignee: 'User 2', status: 'Completed' },
    ],
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold text-white mt-4">{project.name}</h2>
      <p className="text-gray-400">{project.description}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white">Assigned Members</h3>
        <ul className="mt-2">
          {project.assignedMembers.map((member, index) => (
            <li key={index} className="text-gray-400">{member}</li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-gray-400">Due Date: {project.dueDate}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white">Tasks</h3>
        <ul className="mt-2">
          {project.tasks.map((task) => (
            <li key={task.id} className="bg-gray-800 p-2 rounded-md mb-2">
              <h4 className="text-white">{task.name}</h4>
              <p className="text-gray-400">Assignee: {task.assignee}</p>
              <p className="text-gray-400">Status: {task.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetails;
