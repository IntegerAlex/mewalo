import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './CartPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem, clearCart, cartCount } = useCart();

  // Calculate subtotal using Math.floor for whole numbers
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
  };

  // Calculate total with shipping (free shipping over ₹500)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = subtotal > 500 ? 0 : 50;
    return subtotal + shipping;
  };

  // Handle quantity changes with validation
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      toast.error('Item removed from cart!', {
        position: "top-center",
        className: 'centered-toast'
      });
    } else {
      updateCartItem(id, newQuantity);
    }
  };

  // Handle remove item with toast notification
  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id);
    toast.error(`${name} removed from cart!`, {
      position: "top-center",
      className: 'centered-toast'
    });
  };

  // Handle clear cart with toast notification
  const handleClearCart = () => {
    clearCart();
    toast.error('All items have been removed from your cart!', {
      position: "top-center",
      className: 'centered-toast'
    });
  };

  // Convert quantity to grams if less than 1kg (200gm instead of 0.2kg)
  const formatQuantity = (quantity: number) => {
    if (quantity < 1) {
      return `${quantity * 1000}g`; // Convert kg to grams
    }
    return `${quantity}kg`;
  };

  return (
    <div className="cart-page container">
      {/* Toast Notification Container */}
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
      
      <h1>Your Cart ({cartCount})</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="item-type">{item.type}</p>
                  <div className="quantity-selector">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <p className="item-quantity">
                    Quantity: {formatQuantity(item.selectedQuantity)}
                  </p>
                </div>
                <div className="cart-item-price">
                  <p>₹{Math.floor(item.totalPrice)}</p>
                  <button 
                    onClick={() => handleRemoveItem(item.id, item.name)}
                    className="remove-item"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-actions">
              <button onClick={handleClearCart} className="clear-cart">
                Clear Cart
              </button>
              <Link to="/shop" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{Math.floor(calculateSubtotal())}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{calculateSubtotal() > 500 ? 'FREE' : '₹50'}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{Math.floor(calculateTotal())}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;