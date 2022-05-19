import { FormProvider, useForm } from "react-hook-form";
import styles from "./ReactHookForm.module.css";

export type ComplexFormSchema = {
  nameHook: string;
  usernameHook: string;
  emailHook: string;
  ageHook: number | null;
};

export const ReactHookForm = () => {
  const methods = useForm<ComplexFormSchema>({
    mode: "onChange",
    defaultValues: {
      nameHook: "",
      usernameHook: "",
      emailHook: "",
      ageHook: null,
    },
  });

  const onSubmit = (data: ComplexFormSchema) => {
    console.log(data);
  };

  return (
    <div>
      <FormProvider {...methods}>
        {/* https://github.com/react-hook-form/react-hook-form/discussions/8020 */}
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <input
            {...methods.register("nameHook", {
              required: true,
            })}
          />
          {methods.formState.errors.nameHook && <span>Error on nameHook</span>}

          <input
            {...methods.register("usernameHook", {
              required: true,
            })}
          />
          {methods.formState.errors.usernameHook && (
            <span>Error on nameHook</span>
          )}

          <input
            {...methods.register("emailHook", {
              maxLength: 2,
            })}
          />
          {methods.formState.errors.emailHook && (
            <span>Error on emailHook</span>
          )}

          <input
            {...methods.register("ageHook", {
              maxLength: 2,
            })}
          />
          {methods.formState.errors.ageHook && <span>Error on emailHook</span>}

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};
