import { createFileRoute } from '@tanstack/react-router';
import { ProductList } from '../components/ProductList';
import { styled } from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const Route = createFileRoute('/products')({
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <PageTitle>Shop Our Products</PageTitle>
      <ProductList />
    </div>
  );
} 