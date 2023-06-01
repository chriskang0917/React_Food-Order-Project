import { Fragment, useState } from "react";
import Header from "./Header/Header";
import Discription from "./Description";
import ShopList from "../ShopList/ShopList";
import BackgroundImage from "./BackgroundImage";
import Cart from "../Cart/Cart";
import ModalProvider from "../../store/ModalProvider";

const Layout = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showCartHandler = () => {
    setIsShowModal(true);
  };

  const hideCartHandler = () => {
    setIsShowModal(false);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      <main>
        <BackgroundImage />
        <Discription />
        <ShopList />
        <ModalProvider>
          {isShowModal && <Cart onHideCart={hideCartHandler} />}
        </ModalProvider>
      </main>
      {children}
    </Fragment>
  );
};

export default Layout;

//
