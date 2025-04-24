import { createFileRoute, redirect } from '@tanstack/react-router';
import { LoginForm } from '../components/LoginForm';
import { useAuthStore } from '../store/useAuthStore';

export const Route = createFileRoute('/login')({
  component: LoginPage,
  beforeLoad: () => {
    // If the user is already logged in, redirect to the home page
    if (useAuthStore.getState().isAuthenticated) {
      throw redirect({
        to: '/',
        replace: true,
      });
    }
  },
});

function LoginPage() {
  return <LoginForm />;
} 