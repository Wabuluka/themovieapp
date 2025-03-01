import { ButtonComponent } from "./ButtonComponent";
import { Input } from "./Input";

export function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "button":
      return <ButtonComponent {...rest} />;
    default:
      null;
  }
}
