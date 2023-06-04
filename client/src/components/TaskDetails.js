import React from 'react';

const TaskDetails = () => {
  // Mock task details
  const task = {
    id: 1,
    name: 'Task 1',
    description: 'Lorem ipsum dolor sit amet',
    assignee: 'User 1',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2023-06-15',
    comments: ['Comment 1', 'Comment 2'],
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-bold text-white mt-4">{task.name}</h2>
      <p className="text-gray-400">{task.description}</p>
      <p className="mt-4 text-gray-400">Assignee: {task.assignee}</p>
      <p className="text-gray-400">Status: {task.status}</p>
      <p className="text-gray-400">Priority: {task.priority}</p>
      <p className="text-gray-400">Due Date: {task.dueDate}</p>
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white">Comments</h3>
        <ul className="mt-2">
          {task.comments.map((comment, index) => (
            <li key={index} className="text-gray-400">{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskDetails;
