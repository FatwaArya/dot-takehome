import { createFileRoute, Link } from '@tanstack/react-router'
import { styled } from 'styled-components'

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #3b82f6;
`;

const NotFoundDescription = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2rem;
`;

const NotFoundLink = styled(Link)`
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #2563eb;
  }
`;

export const Route = createFileRoute('/__not-found')({
  component: NotFoundPage,
})

function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundDescription>Oops! The page you are looking for does not exist.</NotFoundDescription>
      <NotFoundLink to="/">Go back to home</NotFoundLink>
    </NotFoundContainer>
  )
} 