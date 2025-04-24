import { styled, keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

const SkeletonInfo = styled.div`
  padding: 1rem;
`;

const SkeletonTitle = styled.div`
  height: 1rem;
  margin-bottom: 0.5rem;
  width: 80%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const SkeletonPrice = styled.div`
  height: 1.25rem;
  width: 40%;
  margin-bottom: 0.5rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

const SkeletonButton = styled.div`
  height: 2rem;
  margin-top: 1rem;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

export function ProductSkeleton() {
  return (
    <SkeletonCard>
      <SkeletonImage />
      <SkeletonInfo>
        <SkeletonTitle />
        <SkeletonTitle />
        <SkeletonPrice />
        <SkeletonButton />
      </SkeletonInfo>
    </SkeletonCard>
  );
}

export function ProductSkeletonGrid() {
  return (
    <>
      {Array(6).fill(0).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </>
  );
} 