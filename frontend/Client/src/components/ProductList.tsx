import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  source: string;
  weight: string;
  price: number;
  percentage: string;
}

interface CartItem extends Product {
  quantity: number;
}

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Beetroot',
      source: 'Local shop',
      weight: '500 gm.',
      price: 17.2,
      percentage: '17.2%'
    },
    {
      id: '2',
      name: 'Italian Avocado',
      source: 'Local shop',
      weight: '500 gm.',
      price: 12.2,
      percentage: '12.2%'
    },
    {
      id: '3',
      name: 'Szam amm',
      source: 'Process food',
      weight: '500 gm.',
      price: 14.2,
      percentage: '14.2%'
    },
    {
      id: '4',
      name: 'Beef Mixed',
      source: 'Cut Bone',
      weight: '500 gm.',
      price: 16.2,
      percentage: '16.2%'
    },
    {
      id: '5',
      name: 'Cold drinks',
      source: 'Sprite',
      weight: '500 gm.',
      price: 18.2,
      percentage: '18.2%'
    }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [animation, setAnimation] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setAnimation({ ...animation, [product.id]: true });
    setTimeout(() => setAnimation({ ...animation, [product.id]: false }), 500);

    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productId: string) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (productId: string) => {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const getQuantity = (productId: string) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div 
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.source}</p>
                  <p className="text-sm text-gray-500 mt-1">{product.weight}</p>
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {product.percentage}
                </span>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>

                {getQuantity(product.id) > 0 ? (
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-1 h-8 w-8 rounded-full"
                      onClick={() => decrementQuantity(product.id)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">
                      {getQuantity(product.id)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="p-1 h-8 w-8 rounded-full"
                      onClick={() => incrementQuantity(product.id)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    className={`p-1 h-8 w-8 rounded-full transition-all duration-300 ${
                      animation[product.id] ? 'scale-110 bg-green-500' : 'bg-blue-500'
                    }`}
                    onClick={() => addToCart(product)}
                  >
                    <Plus className="h-4 w-4 text-white" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}