import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { ControlledInput } from "./ControlledInput/ControlledInput";
import styles from "./ReactHookForm.module.css";
import { UncontrolledInput } from "./UncontrolledInput/UncontrolledInput";

type NameFormPart = {
  firstName: string;
  lastName: string;
};

export type ComplexFormSchema = {
  name: NameFormPart;
};

export const ReactHookForm = () => {
  const methods = useForm<ComplexFormSchema>({
    defaultValues: { name: { firstName: "", lastName: "" } },
  });

  const onSubmit = (data: ComplexFormSchema): void => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      {/* https://github.com/react-hook-form/react-hook-form/discussions/8020 */}
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <ControlledInput name="name.firstName" />
        <ControlledInput name="name.lastName" />
        <UncontrolledInput name="name.lastName" />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
