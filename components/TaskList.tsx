import React from "react";

const TaskList = (props: any) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          All Tasks
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {props.tasks.map((task: any, index: any) => {
            return <Task key={index} task={task} />;
          })}
        </dl>
      </div>
    </div>
  );
};

const Task = (props: any) => {
  return (
    <div className="border-b bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{props.task.name}</dt>
    </div>
  );
};

export default TaskList;
