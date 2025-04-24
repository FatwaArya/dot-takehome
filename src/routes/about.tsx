import { createFileRoute } from '@tanstack/react-router'
import { styled } from 'styled-components'

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AboutTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const AboutSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SectionContent = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <AboutContainer>
      <AboutTitle>About Our Shop</AboutTitle>
      
      <AboutSection>
        <SectionTitle>Our Story</SectionTitle>
        <SectionContent>
          Founded in 2023, our shop was established with a simple mission: to provide high-quality products at affordable prices.
          What started as a small venture has now grown into a trusted online store serving customers nationwide.
        </SectionContent>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Our Products</SectionTitle>
        <SectionContent>
          We carefully curate our product selection to ensure that every item meets our high standards of quality.
          From electronics to clothing, we offer a diverse range of products to meet all your needs.
          We work directly with manufacturers to bring you the best prices without compromising on quality.
        </SectionContent>
      </AboutSection>
      
      <AboutSection>
        <SectionTitle>Customer Satisfaction</SectionTitle>
        <SectionContent>
          Customer satisfaction is at the heart of everything we do. We are committed to providing excellent service
          and support throughout your shopping experience. Our dedicated customer service team is always ready to
          assist you with any questions or concerns you may have.
        </SectionContent>
      </AboutSection>
    </AboutContainer>
  )
}
