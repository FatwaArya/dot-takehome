import { styled } from 'styled-components';
import { Task } from '../store/useTaskStore';
import { Button } from './Button';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const StyledTaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
`;

const Checkbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const TaskTitle = styled.span<{ completed: boolean }>`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#a0aec0' : 'inherit')};
`;

const ButtonContainer = styled.div`
  margin-left: 12px;
`;

export const TaskItem = ({ task, onToggle, onRemove }: TaskItemProps) => {
  return (
    <StyledTaskItem>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <TaskTitle completed={task.completed}>{task.title}</TaskTitle>
      <ButtonContainer>
        <Button variant="danger" onClick={() => onRemove(task.id)}>
          Delete
        </Button>
      </ButtonContainer>
    </StyledTaskItem>
  );
}; 