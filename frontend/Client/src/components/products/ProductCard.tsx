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
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const quantityOptions = [
  { label: "200 gm", value: 0.2 },
  { label: "1 kg", value: 1 },
];

interface Product {
  id: string;
  name: string;
  img: string;
  type: string;
  price: string;
}

interface WishlistItem extends Product {
  basePrice: number;
}

const ProductCard = ({ data }: { data: any[] }) => {
  return (
    <div className="productCards container">
      <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        // toastStyle={{
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%, -50%)',
        //   width: 'fit-content',
        // }}
      />
      {data.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

const ProductItem = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const basePrice = parseFloat(product.price.replace('$', '')) * 83;
  const [selectedQuantity, setSelectedQuantity] = useState(0.2);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { cart, addToCart, removeFromCart, updateCartItem } = useCart();
  
  const cartItem = cart.find(item => item.id === product.id);
  const count = cartItem ? cartItem.quantity : 0;

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.some((item: WishlistItem) => item.id === product.id));
  }, [product.id]);

  const handleQuantityChange = (value: string) => {
    setSelectedQuantity(parseFloat(value));
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    const newItem = {
      id: product.id,
      name: product.name,
      img: product.img,
      type: product.type,
      quantity: newCount,
      selectedQuantity: selectedQuantity,
      price: basePrice,
      totalPrice: basePrice * selectedQuantity * newCount,
    };

    if (count === 0) {
      addToCart(newItem);
      toast.success(`${product.name} added to cart!`, {
        position: "top-center",
        className: 'centered-toast'
      });
    } else {
      updateCartItem(product.id, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      updateCartItem(product.id, count - 1);
    } else {
      removeFromCart(product.id);
      toast.error(`${product.name} removed from cart!`, {
        position: "top-center",
        className: 'centered-toast'
      });
    }
  };

  const toggleWishlist = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    
    const wishlist: WishlistItem[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const productIndex = wishlist.findIndex(item => item.id === product.id);
    
    if (productIndex === -1) {
      const newWishlistItem = {
        ...product,
        basePrice: basePrice
      };
      wishlist.push(newWishlistItem);
      setIsWishlisted(true);
      toast.success(`${product.name} added to wishlist!`, {
        position: "top-center",
        className: 'centered-toast'
      });
    } else {
      wishlist.splice(productIndex, 1);
      setIsWishlisted(false);
      toast.error(`${product.name} removed from wishlist!`, {
        position: "top-center",
        className: 'centered-toast'
      });
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };

  const finalPrice = (basePrice * selectedQuantity).toFixed(2);
  const totalPrice = cartItem ? cartItem.totalPrice.toFixed(2) : '0.00';

  return (
    <div className="productCard-item">
      <div className="productCard-img">
        <img
          src={product.img}
          alt={product.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div className="cart-fav-icon-div">
          <button 
            className={`cart-fav-icon ${isAnimating ? 'animate' : ''}`}
            onClick={toggleWishlist}
          >
            <FiHeart 
              size={24} 
              color={isWishlisted ? 'red' : 'white'} 
              fill={isWishlisted ? 'red' : 'none'}
            />
          </button>
        </div>
      </div>

      <div className="productCard-content">
        <div className="productCard-title">{product.name}</div>
        <div className="productCard-type">{product.type}</div>

        <div className="productCard-quantity">
          <Select 
            value={selectedQuantity.toString()} 
            onValueChange={handleQuantityChange}
            disabled={count > 0}
          >
            <SelectTrigger className="w-1/2 mx-auto mt-auto mb-2 text-center border-2 rounded product-quantity">
              <SelectValue placeholder="Select Quantity" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {quantityOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
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

        <div className="productCard-button">
          <CounterButton
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;