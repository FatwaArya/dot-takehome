import { createFileRoute, redirect } from '@tanstack/react-router';
import { Cart } from '../components/Cart';
import { styled } from 'styled-components';
import { useAuthStore } from '../store/useAuthStore';

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Route = createFileRoute('/cart')({
  component: CartPage,
  beforeLoad: () => {
    // Redirect to login if not authenticated
    if (!useAuthStore.getState().isAuthenticated) {
      throw redirect({
        to: '/login',
        replace: true,
      });
    }
  },
});

function CartPage() {
  return (
    <div>
      <PageTitle>Your Shopping Cart</PageTitle>
      <Cart />
    </div>
  );
} 