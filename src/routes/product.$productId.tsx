import { createFileRoute } from '@tanstack/react-router';
import { ProductDetail } from '../components/ProductDetail';

export const Route = createFileRoute('/product/$productId')({
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  return <ProductDetail productId={parseInt(productId, 10)} />;
} 