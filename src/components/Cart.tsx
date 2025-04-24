import { useCartStore } from '../store/useCartStore';
import { Button } from './Button';
import { styled } from 'styled-components';

const CartContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const CartTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const CartEmpty = styled.p`
  color: #64748b;
  font-style: italic;
`;

const CartItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CartItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemTitle = styled.p`
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const ItemPrice = styled.p`
  color: #64748b;
  font-size: 0.875rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
`;

const QuantityButton = styled.button`
  background-color: #f1f5f9;
  border: none;
  border-radius: 4px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #e2e8f0;
  }
`;

const QuantityDisplay = styled.span`
  min-width: 24px;
  text-align: center;
`;

const CartSummary = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
  padding-top: 1rem;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const CheckoutButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

export function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };
  
  const totalPrice = getTotalPrice();
  
  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      
      {items.length === 0 ? (
        <CartEmpty>Your cart is empty.</CartEmpty>
      ) : (
        <>
          <CartItemList>
            {items.map((item) => (
              <CartItemContainer key={item.id}>
                <ItemImage src={item.image} alt={item.title} />
                <ItemDetails>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemDetails>
                <QuantityContainer>
                  <QuantityButton 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                  >
                    -
                  </QuantityButton>
                  <QuantityDisplay>{item.quantity}</QuantityDisplay>
                  <QuantityButton 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityContainer>
              </CartItemContainer>
            ))}
          </CartItemList>
          
          <CartSummary>
            <TotalRow>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <span>Tax</span>
              <span>${(totalPrice * 0.1).toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <strong>Total</strong>
              <strong>${(totalPrice * 1.1).toFixed(2)}</strong>
            </TotalRow>
            
            <div>
              <CheckoutButton onClick={() => alert('Checkout functionality would go here!')}>
                Checkout
              </CheckoutButton>
              <Button variant="danger" onClick={clearCart} style={{ width: '100%', marginTop: '0.5rem' }}>
                Clear Cart
              </Button>
            </div>
          </CartSummary>
        </>
      )}
    </CartContainer>
  );
} 