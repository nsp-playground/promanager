import React from "react";

interface ProjectDetailsProps {
  tasks: string[];
  name: string;
  description: string;
  due: string;
  deleted: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  tasks = [],
  name,
  description,
  due,
  deleted,
  ownerId,
}) => {
  // return null;
  return (
    <div className="bg-white p-6 rounded-lg">
      <h1 className="text-lg font-medium">{name}</h1>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-600">Due: {due}</p>
      <p className={`${deleted ? "text-red-600" : "text-green-600"}`}>
        {deleted ? "Deleted" : "Active"}
      </p>
      <h2 className="text-lg font-medium">Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="text-gray-600">
            {task?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;
