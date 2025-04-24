import { useState } from 'react';
import { styled } from 'styled-components';
import { useTaskStore } from '../store/useTaskStore';
import { TaskForm } from './TaskForm';
import { TaskFilter } from './TaskFilter';
import { TaskList } from './TaskList';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f7fafc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
    margin: 0 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #718096;
  font-size: 1rem;
`;

export const TaskManagement = () => {
  const { tasks, addTask, removeTask, toggleTask } = useTaskStore();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const handleFilterChange = (newFilter: 'all' | 'active' | 'completed') => {
    setFilter(newFilter);
  };

  return (
    <Container>
      <Header>
        <Title>Task Manager</Title>
        <Subtitle>Manage your tasks effectively</Subtitle>
      </Header>
      
      <TaskForm onAddTask={addTask} />
      
      <TaskFilter filter={filter} onFilterChange={handleFilterChange} />
      
      <TaskList 
        tasks={tasks} 
        onToggle={toggleTask} 
        onRemove={removeTask} 
        filter={filter}
      />
      
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <p>{tasks.length} Total Tasks | {tasks.filter(t => !t.completed).length} Active | {tasks.filter(t => t.completed).length} Completed</p>
      </div>
    </Container>
  );
}; 