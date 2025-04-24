import { styled } from 'styled-components';
import { Button } from './Button';

interface TaskFilterProps {
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TaskFilter = ({ filter, onFilterChange }: TaskFilterProps) => {
  return (
    <FilterContainer>
      <Button 
        variant={filter === 'all' ? 'primary' : 'secondary'} 
        onClick={() => onFilterChange('all')}
      >
        All
      </Button>
      <Button 
        variant={filter === 'active' ? 'primary' : 'secondary'} 
        onClick={() => onFilterChange('active')}
      >
        Active
      </Button>
      <Button 
        variant={filter === 'completed' ? 'primary' : 'secondary'} 
        onClick={() => onFilterChange('completed')}
      >
        Completed
      </Button>
    </FilterContainer>
  );
}; 