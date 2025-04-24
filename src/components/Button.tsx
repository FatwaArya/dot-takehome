import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const StyledButton = styled.button<{ variant: string }>`
  padding: 8px 12px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: none;
  
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #3182ce;
          color: white;
          &:hover {
            background-color: #2c5282;
          }
        `;
      case 'secondary':
        return `
          background-color: #a0aec0;
          color: white;
          &:hover {
            background-color: #718096;
          }
        `;
      case 'danger':
        return `
          background-color: #e53e3e;
          color: white;
          &:hover {
            background-color: #c53030;
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Button = ({ 
  children, 
  variant = 'primary',
  onClick,
  type = 'button',
  disabled
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
}; 