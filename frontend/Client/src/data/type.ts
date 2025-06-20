// types.ts
export interface Product {
  id: string;              // Changed from product_id to id for consistency
  image: string;
  name: string;
  subcategory: string;
  weight: string;
  price: string;           // Consider using number instead of string for price
  isStock: boolean;        // Fixed Boolean to boolean (lowercase)
  type?: string;           // Optional from first interface
  tags?: string[];         // Optional from first interface
}
