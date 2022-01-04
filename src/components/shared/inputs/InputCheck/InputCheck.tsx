// Formil
import { ErrorMessage, useField } from "formik";
// Models
import { InputModel } from "../../../../interfaces/inputs/InputModel";

export const InputCheck = ({ label, ...props }: InputModel) => {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input
          className="form-check-input"
          type="checkbox"
          {...field}
          {...props}
        />
        {label}
      </label>

      <ErrorMessage name={props.name} component={"span"} />
    </>
  );
};
