import { TextField } from "@mui/material";
import { Path, useFormContext } from "react-hook-form";
import { ComplexFormSchema } from "../ReactHookForm";

type UncontrolledInputProps = {
  name: Path<ComplexFormSchema>;
};

export const UncontrolledInput = ({ name }: UncontrolledInputProps) => {
  const { register } = useFormContext<ComplexFormSchema>();

  return (
    <TextField
      {...register(name)}
      label={`Uncontrolled-${name}`}
      sx={{ marginBottom: "20px" }}
    />
  );
};
