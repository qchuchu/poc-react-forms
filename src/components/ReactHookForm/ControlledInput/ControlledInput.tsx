import { TextField } from "@mui/material";
import { useController, UseControllerProps } from "react-hook-form";
import { ComplexFormSchema } from "../ReactHookForm";

export const ControlledInput = ({
  name,
}: UseControllerProps<ComplexFormSchema>) => {
  const { field } = useController({ name });

  return (
    <TextField
      {...field}
      label={`Controlled-${field.name}`}
      sx={{ marginBottom: "20px" }}
    />
  );
};
