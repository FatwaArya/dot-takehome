import { Button } from './Button';
import { Product } from '../types/product';
import { useCartStore } from '../store/useCartStore';
import { Link } from '@tanstack/react-router';
import { styled } from 'styled-components';
import { useAuthStore } from '../store/useAuthStore';

interface ProductCardProps {
  product: Product;
}

const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 1rem;
  background-color: #f8fafc;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.5rem;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledButtonLink = styled.div`
  flex: 1;
  display: flex;
`;

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();
  
  const handleAddToCart = () => {
    if (isAuthenticated) {
      addToCart(product);
    }
  };
  
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <ProductInfo>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ButtonContainer>
          {isAuthenticated ? (
            <StyledButtonLink>
              <Button onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </StyledButtonLink>
          ) : (
            <StyledButtonLink>
              <Link
                to="/login"
                style={{ textDecoration: 'none', width: '100%' }}
              >
                <Button>
                  Login to Buy
                </Button>
              </Link>
            </StyledButtonLink>
          )}
          <StyledButtonLink>
            <Link
              to="/product/$productId"
              params={{ productId: product.id.toString() }}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Button variant="secondary">
                Details
              </Button>
            </Link>
          </StyledButtonLink>
        </ButtonContainer>
      </ProductInfo>
    </Card>
  );
} 