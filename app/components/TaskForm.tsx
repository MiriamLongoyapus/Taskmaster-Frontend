import { addTask, updateTask } from '@/application/action';
import { TaskDataResponseType } from '@/types';
import { useState, useEffect } from 'react';

interface TaskFormProps {
  taskToEdit?: TaskDataResponseType;
  addTaskToState: (task: TaskDataResponseType) => void;
}

const TaskForm = ({ taskToEdit, addTaskToState }: TaskFormProps) => {
  const [title, setTitle] = useState(taskToEdit ? taskToEdit.title : '');
  const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : '');
  const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : 'medium');
  const [dueDate, setDueDate] = useState(taskToEdit ? taskToEdit.due_date : '');
  const [completed, setCompleted] = useState(taskToEdit ? taskToEdit.completed : false);

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
      setDueDate(taskToEdit.due_date);
      setCompleted(taskToEdit.completed);
    }
  }, [taskToEdit]);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert('Please fill in all fields.');
      return;
    }
    const task = { title, description, priority, dueDate, completed };
    
    if (taskToEdit) {
      const response = await updateTask({taskId: taskToEdit.id, updatedTask: {...task,due_date:dueDate}});
      if (response.data && response.status === 200){
        addTaskToState(response.data)
        alert(response.message)
        resetForm();
        return
      }else{
        alert(response.message)
        return
      }
    } else {
      const response = await addTask({...task,due_date:dueDate});
      if (response.data && response.status === 201){
        addTaskToState(response.data)
        alert(response.message)
        resetForm();
        return
      }else{
        alert(response.message)
        return
      }
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as "high" | "medium" | "low")}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        <label>Completed</label>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

export default TaskForm;
