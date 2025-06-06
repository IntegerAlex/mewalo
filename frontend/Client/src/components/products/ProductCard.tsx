import React, { useState } from "react";
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

const quantityOptions = [
  { label: "200 gm", value: 0.2 },
  { label: "1 kg", value: 1 },
];

const ProductCard = ({ data }: { data: any[] }) => {
  return (
    <div className="productCards container">
      {data.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

const ProductItem = ({ product }: { product: any }) => {
  const basePrice = parseFloat(product.price.replace('$', '')) * 83; // Convert $ to ₹
  const [selectedQuantity, setSelectedQuantity] = useState(0.2);
  const { cart, addToCart, removeFromCart, updateCartItem } = useCart();
  
  const cartItem = cart.find(item => item.id === product.id);
  const count = cartItem ? cartItem.quantity : 0;

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
    } else {
      updateCartItem(product.id, newCount);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      updateCartItem(product.id, count - 1);
    } else {
      removeFromCart(product.id);
    }
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
            <SelectTrigger className="w-1/2 mx-auto mt-auto mb-2 text-center border-2 border-green-700 rounded">
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