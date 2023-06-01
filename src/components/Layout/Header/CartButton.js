import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import styles from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = ({ onClick }) => {
  const cartCtx = useContext(CartContext);
  const [isButtonHighlisht, setIsButtonHighlisght] = useState(false);

  const { items } = cartCtx;

  const totalNumberOfItems = cartCtx.items.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  // 上面這個 0 非常重要，他可以讓原本的空物件，預設有一個 0 可以計算

  const btnClasses = `${styles.button} ${isButtonHighlisht ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length > 0) {
      setIsButtonHighlisght(true);
    } else {
      return;
    }
    const timer = setTimeout(() => setIsButtonHighlisght(false), 300);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{totalNumberOfItems}</span>
    </button>
  );
};

export default CartButton;

// 1. in CartButton.js, listen to button, call "cartClickHandler", turn isShowModal to true
// 2. Layout init state isShowModal to false
// 3. In Layout.js, apply && to show isShowModal && <Cart />
// 4. In Cart.js, listen to Close button with "closeClickHandler", turning isShowModal to false
