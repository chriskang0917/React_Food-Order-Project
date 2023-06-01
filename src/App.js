import Layout from "./components/Layout/Layout";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;

// 前期的設計稿要清晰，flowchart 要出來
// 在切分元件時，從一開始就要先寫好

// 1. Create components, including Layout + UI > Header + main
// Header > h1 + CartButton
// main > description + ShopList
// ShopList > ShopItem
// 2. Layout wraps the components of Header and main
