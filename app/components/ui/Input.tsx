import { forwardRef } from "react";

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { onChange, ...rest },
  ref
) {
  return <input ref={ref} {...rest} onChange={onChange} />;
});

export default Input;
