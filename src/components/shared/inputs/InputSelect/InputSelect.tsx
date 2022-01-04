// Formik
import { ErrorMessage, useField } from "formik";
// Models
import { InputModel } from "../../../../interfaces/inputs/InputModel";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @type Shared
 * @description Input Type Select, show an input element with validations
 * @param param0
 * @returns
 */
export const InputSelect = ({ label, ...props }: InputModel) => {
  const [field] = useField(props);

  return (
    <>
      {/* FORM GROUP */}
      <div className="form-group">
        {/* LABEL */}
        <label htmlFor={props.id || props.name}>{label}</label>
        {/* LABEL */}
        {/* SELECT */}
        <select className="form-control" {...field} {...props}></select>
        {/* SELECT */}
        {/* ERROR MESSAGE FORMIK */}
        <ErrorMessage
          className="error-message"
          name={props.name}
          component={"span"}
        />
        {/* ERROR MESSAGE FORMIK */}
      </div>
      {/* FORM GROUP */}
    </>
  );
};
