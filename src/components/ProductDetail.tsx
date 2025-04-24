import { styled } from 'styled-components';
import { Button } from './Button';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Link } from '@tanstack/react-router';
import { useProduct } from '../hooks/useProducts';
import { ProductDetailSkeleton } from './ProductDetailSkeleton';

interface ProductDetailProps {
  productId: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductCategory = styled.p`
  color: #64748b;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ProductDescription = styled.p`
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ErrorMessage = styled.div`
  color: #e53e3e;
  background-color: #fff5f5;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #fc8181;
`;

export function ProductDetail({ productId }: ProductDetailProps) {
  const { data: product, isLoading, isError, error } = useProduct(productId);
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  const handleAddToCart = () => {
    if (isAuthenticated && product) {
      addToCart(product);
    }
  };

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError) {
    return <ErrorMessage>{error.message || 'Failed to load product details. The product may not exist or there was a server error.'}</ErrorMessage>;
  }

  if (!product) {
    return <ErrorMessage>Product not found.</ErrorMessage>;
  }

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.title} />
      </ImageContainer>
      <InfoContainer>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductRating>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </ProductRating>
        <ProductDescription>{product.description}</ProductDescription>
        {isAuthenticated ? (
          <Button onClick={handleAddToCart} variant="primary">Add to Cart</Button>
        ) : (
          <Link to="/login">
            <Button variant="primary">Login to Buy</Button>
          </Link>
        )}
      </InfoContainer>
    </Container>
  );
} 