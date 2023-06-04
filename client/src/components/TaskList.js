import React from 'react';

const TaskList = () => {
  // Mock task data
  const tasks = [
    { id: 1, name: 'Task 1', assignee: 'User 1', status: 'In Progress' },
    { id: 2, name: 'Task 2', assignee: 'User 2', status: 'Completed' },
    // Add more tasks if needed
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold text-white mt-4">Task List</h2>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="bg-gray-800 p-4 rounded-md mb-4">
            <h3 className="text-lg font-bold text-white">{task.name}</h3>
            <p className="text-gray-400">Assignee: {task.assignee}</p>
            <p className="text-gray-400">Status: {task.status}</p>
            {/* Buttons for editing, deleting, or marking tasks as complete */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
