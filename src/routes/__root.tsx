import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useAuthStore } from '../store/useAuthStore'
import { useCartStore } from '../store/useCartStore'
import { styled } from 'styled-components'
import { useState } from 'react'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1rem;
    flex-wrap: wrap;
  }
`;

// Add type definition for NavLinks props
interface NavLinksProps {
  isOpen?: boolean;
}

const NavLinks = styled.div<NavLinksProps>`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: ${({ isOpen }) => (isOpen ? 'column' : 'row')};
    width: ${({ isOpen }) => (isOpen ? '100%' : 'auto')};
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    order: 3;
    margin-top: ${({ isOpen }) => (isOpen ? '1rem' : '0')};
  }
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
  
  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const AuthLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    order: 2;
  }
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
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  order: 1;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const RootComponent = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <>
      <NavBar>
        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuToggle>
        
        <NavLinks isOpen={isMenuOpen}>
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

export const Route = createRootRoute({
  component: RootComponent
})