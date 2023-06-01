import ModalContext from "./modal-context";

const modalContext = {
  isCartShow: false,
};

const ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
