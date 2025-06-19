import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import ProductCard from '../products/ProductCard';
import './WishlistPage.css';
import { FiHeart } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface WishlistItem {
  product_id: string;
  name: string;
  image: string;
  subcategory: string;
  price: string;
  basePrice: number;
}

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter(item => item.product_id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    toast.error('Removed from wishlist!', {
      position: "top-center",
      className: 'centered-toast'
    });
  };

  const addToCartFromWishlist = (product: WishlistItem) => {
    const newItem = {
      id: product.product_id,
      name: product.name,
      img: product.image,
      type: product.subcategory,
      quantity: 1,
      selectedQuantity: 0.2, // Default quantity
      price: product.basePrice,
      totalPrice: product.basePrice * 0.2 // Default to 200gm
    };
    addToCart(newItem);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      className: 'centered-toast'
    });
  };

  return (
    <div className="wishlist-page container">
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
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="wishlist-items">
          {wishlist.map((product) => (
            <div key={product.product_id} className="wishlist-item">
              <div className="wishlist-item-img">
                <img src={product.image} alt={product.name} />
                <button 
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(product.product_id)}
                >
                  <FiHeart size={20} color="red" fill="red" />
                </button>
              </div>
              <div className="wishlist-item-details">
                <h3>{product.name}</h3>
                <p className="item-type">{product.subcategory}</p>
                <p className="item-price">₹{(product.basePrice * 0.2).toFixed(2)} (200gm)</p>
              </div>
              <div className="wishlist-item-actions">
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCartFromWishlist(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;