'use server'
import { TaskDataResponseType, TaskType } from '@/types';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export const getTasks = async (): Promise<{data?: TaskDataResponseType[], status: number, message: string}> => {
  try {
    const response = await axios.get(API_URL);
    return {
        message: 'tasks fetched successfully',
        status: response.status,
        data: response.data
    }
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return {
        status : 400,
        message : 'Error fetching tasks:'
    }
  }
};

export const addTask = async (task: TaskType): Promise<{data?: TaskDataResponseType, status: number, message: string}> => {
  try {
    const response = await axios.post(API_URL, task);
    return {
        message: 'task added successfully',
        status: response.status,
        data: response.data
    }
  } catch (error) {
    console.error('Error adding task:', error);
    return {
        status : 400,
        message : 'Error adding tasks:'
    }
  }
};

export const updateTask = async ({taskId, updatedTask}: {taskId: number, updatedTask: TaskType}): Promise<{data?: TaskDataResponseType, status: number, message: string}> => {
  try {
    const response = await axios.put(`${API_URL}${taskId}/`, updatedTask);
    return {       
        message: 'task updated successfully',
        status: response.status,
        data: response.data
    }
  } catch (error) {
    console.error('Error updating task:', error);
    return {
        status : 400,
        message : 'Error updating task:'
    }
  }
};

export const deleteTask = async (taskId: number): Promise<{status: number, message: string}> => {
  try {
    await axios.delete(`${API_URL}${taskId}/`);
    return {       
        message: 'task deleted successfully',
        status: 200,
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    return {
        status : 400,
        message : 'Error deleting task:'
    }
    // throw error;
  }
};
