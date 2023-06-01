import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = ({ onShowCart }) => {
  return (
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <CartButton onClick={onShowCart} />
    </header>
  );
};

export default Header;
