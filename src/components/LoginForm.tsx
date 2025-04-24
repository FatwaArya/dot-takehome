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

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
`;

const TestAccountContainer = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 4px;
`;

const TestAccountTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
`;

const TestAccountDetails = styled.div`
  margin-bottom: 1rem;
`;

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, clearError } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    try {
      await login(email, password);
      navigate({ to: '/' });
    } catch {
      // Error is handled in the store
    }
  };

  const fillDummyCredentials = () => {
    setEmail('user@example.com');
    setPassword('password');
  };

  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
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
        
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
      
      <RegisterLink>
        Don't have an account? <Link to="/register">Register here</Link>
      </RegisterLink>

      <TestAccountContainer>
        <TestAccountTitle>Test Account</TestAccountTitle>
        <TestAccountDetails>
          <p>Email: user@example.com</p>
          <p>Password: password</p>
        </TestAccountDetails>
        <Button variant="secondary" onClick={fillDummyCredentials}>
          Fill Test Credentials
        </Button>
      </TestAccountContainer>
    </FormContainer>
  );
} 