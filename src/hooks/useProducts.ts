import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductsByCategory } from '../services/productService';
import { Product } from '../types/product';

export function useProducts(category?: string) {
  return useQuery<Product[]>({
    queryKey: category ? ['products', 'category', category] : ['products'],
    queryFn: () => category ? fetchProductsByCategory(category) : fetchProducts(),
  });
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`Product with ID ${id} not found`);
      }
      return response.json() as Promise<Product>;
    },
  });
} 