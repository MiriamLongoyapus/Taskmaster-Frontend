export type TaskType =   {
    title: string,
    description: string,
    priority: 'high' | 'medium' | 'low',
    due_date: string,
    completed: boolean
  }
export type TaskDataResponseType = TaskType & {
    id: number
}