import { ProductCard } from './ProductCard';
import { styled } from 'styled-components';
import { useProducts } from '../hooks/useProducts';
import { ProductSkeletonGrid } from './ProductSkeleton';

interface ProductListProps {
  category?: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  background-color: #fff5f5;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #fc8181;
  margin-bottom: 1.5rem;
`;

export function ProductList({ category }: ProductListProps) {
  const { data: products, isLoading, isError, error } = useProducts(category);

  if (isLoading) {
    return (
      <Grid>
        <ProductSkeletonGrid />
      </Grid>
    );
  }

  if (isError) {
    return <ErrorMessage>{error.message || 'Failed to load products. Please try again later.'}</ErrorMessage>;
  }

  if (!products || products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
} 