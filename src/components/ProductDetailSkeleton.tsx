import { styled, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSkeleton = styled.div`
  flex: 1;
  height: 400px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const TitleSkeleton = styled.div`
  height: 2rem;
  width: 70%;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const CategorySkeleton = styled.div`
  height: 1rem;
  width: 40%;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const PriceSkeleton = styled.div`
  height: 1.5rem;
  width: 30%;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const RatingSkeleton = styled.div`
  height: 1rem;
  width: 50%;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const DescriptionSkeleton = styled.div`
  height: 5rem;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const ButtonSkeleton = styled.div`
  height: 2.5rem;
  width: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

export function ProductDetailSkeleton() {
  return (
    <Container>
      <ImageSkeleton />
      <InfoContainer>
        <TitleSkeleton />
        <CategorySkeleton />
        <PriceSkeleton />
        <RatingSkeleton />
        <DescriptionSkeleton />
        <ButtonSkeleton />
      </InfoContainer>
    </Container>
  );
} 