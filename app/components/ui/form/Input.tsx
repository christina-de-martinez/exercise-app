import { forwardRef } from "react";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { onChange, ...rest },
  ref
) {
  return (
    <input ref={ref} {...rest} onChange={onChange} className={styles.base} />
  );
});

export default Input;
