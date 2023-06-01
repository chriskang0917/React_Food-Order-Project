import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const cartItem = cartCtx.items;
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0;

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={onHideCart}>
      <ul className={styles["cart-items"]}>
        {cartItem.map(item => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartRemoveHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={onHideCart}>
          Close
        </button>
        {hasItem && <button className={styles["button"]}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
