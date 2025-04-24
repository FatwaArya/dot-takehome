import { createFileRoute } from '@tanstack/react-router'
import { TaskManagement } from '../components/TaskManagement'
export const Route = createFileRoute('/tasks')({
  component: Tasks,
})

function Tasks() {
  return (
    <div className="p-4">
      <h1>Task Management</h1>
      <TaskManagement />
    </div>
  )
} 