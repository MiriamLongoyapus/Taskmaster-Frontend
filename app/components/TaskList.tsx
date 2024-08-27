import { deleteTask } from "@/application/action";
import { TaskDataResponseType } from "@/types";
import React, { SetStateAction } from "react";

  interface TaskListProps {
    tasks: TaskDataResponseType[];
    editTask: (task: TaskDataResponseType) => void;
    removeTaskFromState: (task: TaskDataResponseType) => void;
  }
  
  const TaskList = ({ tasks, editTask, removeTaskFromState }: TaskListProps) => {
    
    const handleDeleteTask = async (task: TaskDataResponseType) => {
      const okay = (confirm('Are you sure you want to delete this task?')) 
      if (okay){
        const response = await deleteTask(task.id);
        if ( response.status === 200){
          removeTaskFromState(task)
          alert(response.message)
          return
        }else{
          alert(response.message)
          return
        }
      }

    };
    return (
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`p-4 border rounded-md shadow-sm ${
              task.priority === 'high'
                ? 'border-red-500 text-red-700'
                : task.priority === 'medium'
                ? 'border-orange-500 text-orange-700'
                : 'border-green-500 text-green-700'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{task.title}</h3>
            <p className="mb-2">{task.description}</p>
            <p className="mb-1">
              <span className="font-medium">Priority:</span> {task.priority}
            </p>
            <p className="mb-1">
              <span className="font-medium">Due Date:</span> {task.due_date}
            </p>
            <p className="mb-4">
              <span className="font-medium">Status:</span>{' '}
              {task.completed ? 'Completed' : 'Not Completed'}
            </p>
            <button
              className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => editTask(task)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => handleDeleteTask(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  
