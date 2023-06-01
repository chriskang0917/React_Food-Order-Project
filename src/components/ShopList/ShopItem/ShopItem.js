import { useContext } from "react";
import ItemForm from "./ItemForm";
import styles from "./ShopItem.module.css";
import CartContext from "../../../store/cart-context";

const ShopItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const FixedPrice = `${price.toFixed(2)}`;

  const addItemHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{FixedPrice}</div>
      </div>
      <div>
        <ItemForm onAddItem={addItemHandler} />
      </div>
    </li>
  );
};

export default ShopItem;
