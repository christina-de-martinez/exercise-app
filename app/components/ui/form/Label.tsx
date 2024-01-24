import { forwardRef } from "react";

import styles from "./Label.module.css";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, ...rest },
  ref
) {
  return (
    <label ref={ref} {...rest} className={styles.base}>
      {children}
    </label>
  );
});

export default Label;
