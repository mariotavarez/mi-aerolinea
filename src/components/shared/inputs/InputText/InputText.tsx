// Formik
import { ErrorMessage, useField } from "formik";
// Models
import { InputModel } from "../../../../interfaces/inputs/InputModel";

export const InputText = ({ label, ...props }: InputModel) => {
  const [field] = useField(props);

  return (
    <>
      <div className="form-group">
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="form-control" {...field} {...props} />
        <ErrorMessage
          className="error-message"
          name={props.name}
          component={"span"}
        />
      </div>
    </>
  );
};
