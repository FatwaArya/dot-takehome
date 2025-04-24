import { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { useAuthStore } from '../store/useAuthStore';
import { styled } from 'styled-components';
import { Link, useNavigate } from '@tanstack/react-router';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  background-color: #fff5f5;
  color: #e53e3e;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const LoginLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
`;

export function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const { register, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    setFormError(null);
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    
    try {
      await register(name, email, password);
      navigate({ to: '/' });
    } catch (err) {
      // Error is handled in the store
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create an Account</FormTitle>
      
      {formError && <ErrorMessage>{formError}</ErrorMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        
        <FormGroup>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        
        <Button type="submit">
          {isLoading ? 'Creating Account...' : 'Register'}
        </Button>
      </form>
      
      <LoginLink>
        Already have an account? <Link to="/login">Login here</Link>
      </LoginLink>
    </FormContainer>
  );
} 