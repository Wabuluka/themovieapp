import { Input } from "./Input";

export function FormControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    default:
      null;
  }
}
