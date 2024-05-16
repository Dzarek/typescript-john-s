import { Label } from "./ui/label";
import { Input } from "./ui/input";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

const FormInput = ({ label, name, type, defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label className="capitalize" htmlFor={name}>
        {label || name}
      </Label>
      <Input id={name} type={type} name={name} defaultValue={defaultValue} />
    </div>
  );
};

export default FormInput;
