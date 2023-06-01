import { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./ItemForm.module.css";

// 1. Create handler to catch the data from the form
// 2. Prevent default after submitting
// 3. Define the validation, if false, directly return without doing anything

const ItemForm = ({ key, onAddItem }) => {
  // const [isInputValid, setIsInputValid] = useState(true);

  const inputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const inputValue = +inputRef.current.value;

    // if (inputValue.trim().length === 0 || inputValue < 1 || inputValue > 5) {
    //   setIsInputValid(false);
    //   return;
    // }

    onAddItem(inputValue);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label={"Amount"}
        input={{
          id: `amount_${key}`,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default ItemForm;
