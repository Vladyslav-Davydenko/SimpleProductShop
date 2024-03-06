import { useState } from "react";
import { type CartItem } from "../_types/Cart";
import { useCart } from "../_providers/Cart";

export default function useCartActions(cartItem: CartItem) {
  const [quantity, setQuantity] = useState<number>(cartItem.quantity ?? 1);

  const { addItemToCart, deleteItemFromCart } = useCart();

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;

    setQuantity(newQuantity);
    addItemToCart({ ...cartItem, quantity: Number(newQuantity) });
  };

  const decrementQuantity = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : quantity;

    setQuantity(newQuantity);
    addItemToCart({ ...cartItem, quantity: Number(newQuantity) });
  };

  const enterQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQty = Number(e.target.value);

    if (!isNaN(updatedQty)) {
      setQuantity(updatedQty);
      addItemToCart({ ...cartItem, quantity: Number(updatedQty) });
    }
  };

  const handleDeleteItem = () => {
    deleteItemFromCart(cartItem);
  };

  return {
    incrementQuantity,
    decrementQuantity,
    enterQty,
    handleDeleteItem,
    quantity,
  };
}
