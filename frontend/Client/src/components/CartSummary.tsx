import { Button } from './ui/button';


interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartSummaryProps {
  cart: CartItem[];
  clearCart: () => void;
}

export function CartSummary({ cart, clearCart }: CartSummaryProps) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
      <h3 className="font-semibold text-lg mb-2">Cart Summary</h3>
      <p>Items: {totalItems}</p>
      <p className="font-bold">Total: ${totalPrice.toFixed(2)}</p>
      <div className="mt-2 flex space-x-2">
        <Button variant="outline" size="sm" onClick={clearCart}>
          Clear
        </Button>
        <Button variant="default" size="sm">
          Checkout
        </Button>
      </div>
    </div>
  );
}