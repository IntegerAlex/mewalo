import React, { useState, useEffect } from "react";
import "./ProductCard.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CounterButton from "./CounterButton";
import { useCart } from "../../contexts/CartContext";
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const quantityOptions = [
  { label: "200 gm", value: 0.2 },
  { label: "1 kg", value: 1 },
];

interface Product {
  product_id: string;
  name: string;
  image: string;
  subcategory: string;
  price: string;
  isStock: boolean; // Added isStock to the Product interface
}

interface WishlistItem extends Product {
  basePrice: number;
}

interface ProductCardProps {
  data: Product[];
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="productCards container">
      {data.map((product) => (
        <ProductItem key={product.product_id} product={product} />
      ))}
    </div>
  );
};

const ProductItem = ({ product }: { product: Product }) => {
  const basePrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  const [selectedQuantity, setSelectedQuantity] = useState(0.2);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cart, addToCart, removeFromCart, updateCartItem } = useCart();
  
  const cartItem = cart.find(item => item.id === product.product_id);
  const count = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.some((item: WishlistItem) => item.product_id === product.product_id));
  }, [product.product_id]);

  const handleQuantityChange = (value: string) => {
    setSelectedQuantity(parseFloat(value));
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    const newItem = {
      id: product.product_id,
      name: product.name,
      img: product.image,
      type: product.subcategory,
      quantity: newCount,
      selectedQuantity: selectedQuantity,
      price: basePrice,
      totalPrice: Math.floor(basePrice * selectedQuantity * newCount),
    };

    if (count === 0) {
      addToCart(newItem);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      updateCartItem(product.product_id, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      updateCartItem(product.product_id, count - 1);
    } else {
      removeFromCart(product.product_id);
      toast.error(`${product.name} removed from cart!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const toggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    
    const wishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const productIndex = wishlist.findIndex(item => item.product_id === product.product_id);
    
    if (productIndex === -1) {
      const newWishlistItem = {
        ...product,
        basePrice: Math.floor(basePrice)
      };
      wishlist.push(newWishlistItem);
      setIsWishlisted(true);
      toast.success(`${product.name} added to wishlist!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      wishlist.splice(productIndex, 1);
      setIsWishlisted(false);
      toast.error(`${product.name} removed from wishlist!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  const finalPrice = Math.floor(basePrice * selectedQuantity);
  const totalPrice = cartItem ? Math.floor(cartItem.totalPrice) : 0;

  return (
    <div className="productCard-item">
      <div className="productCard-img">
        <img
          src={product.image}
          alt={product.name}
          className="productCardImg"
        />
        <div className="cart-fav-icon-div">
          <button 
            className={`cart-fav-icon ${isAnimating ? 'animate' : ''}`}
            onClick={toggleWishlist}
          >
            <FiHeart 
              className="product-heart-icon"
              color={isWishlisted ? 'red' : 'white'} 
              fill={isWishlisted ? 'red' : 'none'}
            />
          </button>
        </div>
      </div>

      <div className="productCard-content">
        <div className="productCard-title">{product.name}</div>
        <div className="productCard-type">{product.subcategory}</div>

        <div className="productCard-quantity">
          <Select 
            value={selectedQuantity.toString()} 
            onValueChange={handleQuantityChange}
            disabled={count > 0 || !product.isStock} // Disable if out of stock
          >
            <SelectTrigger className="product-quantity">
              <SelectValue placeholder="Select Quantity"/>
            </SelectTrigger>
            <SelectContent className="product-quantity-content">
              <SelectGroup>
                {quantityOptions.map((option) => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value.toString()}
                    className="product-quantity-item"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="productCard-prize mb-2">Price: ₹{finalPrice}</div>

        {count > 0 && (
          <div className="productCard-total font-semibold text-green-700">
            Total: ₹{totalPrice}
          </div>
        )}

        {product.isStock ? (
          <div className="productCard-button">
            <CounterButton
              count={count}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </div>
        ) : (
         <div className="productCard-Notify">
          <button className="productCard-Notify-btn">NOTIFY</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;