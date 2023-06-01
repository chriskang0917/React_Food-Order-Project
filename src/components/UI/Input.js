import { forwardRef } from "react";
import styles from "./Input.module.css";

const Input = forwardRef(({ input, label }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;

// 上面的 <input id={input.id} {...input} />
// 目的是為了傳入不特定的 input 格式後，可以被展開並放入 <input>
