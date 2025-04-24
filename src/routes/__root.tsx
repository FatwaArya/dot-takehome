import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useAuthStore } from '../store/useAuthStore'
import { useCartStore } from '../store/useCartStore'
import { styled } from 'styled-components'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  
  &:hover {
    color: #111827;
  }
  
  &.active {
    color: #3b82f6;
    font-weight: 600;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartIndicator = styled.div`
  position: relative;
  margin-right: 0.5rem;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ef4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Route = createRootRoute({
  component: () => {
    const { isAuthenticated, logout } = useAuthStore();
    const { getTotalItems } = useCartStore();
    const totalItems = getTotalItems();
    
    return (
      <>
        <NavBar>
          <NavLinks>
            <NavLink to="/" activeProps={{ className: 'active' }}>
              Home
            </NavLink>
            <NavLink to="/products" activeProps={{ className: 'active' }}>
              Products
            </NavLink>
            <NavLink to="/about" activeProps={{ className: 'active' }}>
              About
            </NavLink>
            <NavLink to="/tasks" activeProps={{ className: 'active' }}>
            Tasks management
            </NavLink>
          </NavLinks>
          
          <AuthLinks>
            <CartIndicator>
              <NavLink to="/cart" activeProps={{ className: 'active' }}>
                🛒 Cart
              </NavLink>
              {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
            </CartIndicator>
            
            {isAuthenticated ? (
              <NavLink as="button" onClick={() => logout()}>
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink to="/login" activeProps={{ className: 'active' }}>
                  Login
                </NavLink>
                <NavLink to="/register" activeProps={{ className: 'active' }}>
                  Register
                </NavLink>
              </>
            )}
          </AuthLinks>
        </NavBar>
        
        <MainContent>
          <Outlet />
        </MainContent>
        
        <TanStackRouterDevtools />
      </>
    )
  }
})