import { ChangeEvent, forwardRef } from 'react';
import { styled } from 'styled-components';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const StyledInput = styled.input`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #e2e8f0;
  width: 100%;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #3182ce;
  }
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, value, onChange, type = 'text', ...rest }, ref) => {
    return (
      <StyledInput
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
); 