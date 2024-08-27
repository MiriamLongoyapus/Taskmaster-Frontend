
'use client';
import { getTasks } from '@/application/action';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { useEffect, useState } from 'react';
import { TaskDataResponseType, TaskType } from '@/types';

const HomePage = () => {
  const [tasks, setTasks] = useState<TaskDataResponseType[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<TaskDataResponseType | undefined>(undefined);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await getTasks();
      if (response.data && response.status === 200){
        setTasks(response.data);
        return
      } else {
        alert(response.message)
      }
    };
    fetchTasks();
  }, []);

  const addTaskToState = (task: TaskDataResponseType) => {
    setTasks([task, ...tasks]);
  };

  const editTask = (task: TaskDataResponseType) => {
    setTaskToEdit(task);
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  const removeTaskFromState = (task: TaskDataResponseType) => {
    setTasks(tasks.filter((item) => item.id !== task.id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Task Master Tool</h1>
      <div className="max-w-xl mx-auto bg-white text-black shadow-md rounded-lg p-6">
        <TaskForm taskToEdit={taskToEdit} addTaskToState={addTaskToState}/>
      </div>
      <div className="mt-8 max-w-xl mx-auto">
        {
          tasks.length === 0 ? <p className='text-black/80'>
            No tasks yet
          </p> :
        <TaskList tasks={tasks} editTask={editTask} removeTaskFromState={removeTaskFromState} />
        }
      </div>
    </div>
  );
};

export default HomePage;

