import { FormEvent, useState } from 'react';
import { styled } from 'styled-components';
import { Input } from './Input';
import { Button } from './Button';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

const StyledForm = styled.form`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`;

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Input
          placeholder="Add a new task..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </InputWrapper>
      <Button type="submit">Add Task</Button>
    </StyledForm>
  );
}; 