import { styled } from 'styled-components';
import { Task } from '../store/useTaskStore';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  filter: 'all' | 'active' | 'completed';
}

const StyledTaskList = styled.div`
  margin-top: 16px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #718096;
  padding: 16px;
`;

export const TaskList = ({ tasks, onToggle, onRemove, filter }: TaskListProps) => {
  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <EmptyMessage>No tasks to display</EmptyMessage>;
  }

  return (
    <StyledTaskList>
      {filteredTasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onRemove={onRemove} 
        />
      ))}
    </StyledTaskList>
  );
}; 