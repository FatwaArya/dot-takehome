import { createFileRoute, redirect } from '@tanstack/react-router';
import { RegisterForm } from '../components/RegisterForm';
import { useAuthStore } from '../store/useAuthStore';

export const Route = createFileRoute('/register')({
  component: RegisterPage,
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

function RegisterPage() {
  return <RegisterForm />;
} 