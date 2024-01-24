import { forwardRef } from "react";

import styles from "./Form.module.css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = forwardRef<HTMLFormElement, FormProps>(function Form(
  { onSubmit, children, ...rest },
  ref
) {
  return (
    <form onSubmit={onSubmit} {...rest} ref={ref} className={styles.base}>
      {children}
    </form>
  );
});

export default Form;
