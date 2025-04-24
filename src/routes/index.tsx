import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../components/ProductList'
import { styled } from 'styled-components'

const HeroSection = styled.section`
  background-color: #f8fafc;
  padding: 3rem 0;
  margin-bottom: 3rem;
  border-radius: 8px;
  text-align: center;
`

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const HeroDescription = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      <HeroSection>
        <HeroTitle>Welcome to Our Shop</HeroTitle>
        <HeroDescription>
          Discover our amazing products with high quality and affordable prices.
          We have a wide range of products to meet your needs.
        </HeroDescription>
      </HeroSection>

      <SectionTitle>Featured Products</SectionTitle>
      <ProductList />
    </div>
  )
}