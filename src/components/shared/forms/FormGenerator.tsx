// Formik
import { Form, Formik } from "formik";
// Json
import search from "../../../data/forms/Search.json";
// Shared
import { InputSelect, InputText } from "../inputs";
// Models
import { FormModel } from "../../../interfaces/forms/FormModel";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @type Shared
 * @description Form Generator, this component generate a form automatically with formik
 * @returns
 */
export const FormGenerator = ({ nameButton, icon, rows = 1 }: FormModel) => {
  // Initial Values
  const initialValues: { [key: string]: any } = {};
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("values: ", values);
        }}
      >
        {(formik) => (
          <Form>
            <div
              className={`${
                rows !== 1 ? "form-group-two-rows" : "form-group-one-row"
              }`}
            >
              {search.map(
                ({ name, type, label, options, placeholder }: any) => {
                  // Validate if the input type is a: text, date, number or date
                  if (
                    type.includes("text") ||
                    type.includes("date") ||
                    type.includes("number") ||
                    type.includes("date")
                  ) {
                    return (
                      <InputText
                        key={name}
                        type={type}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                      />
                    );
                  }
                  // Validate if the input type is a: select
                  if (type.includes("select")) {
                    return (
                      <InputSelect key={name} label={label} name={name}>
                        <option value="">Seleccione una opcion</option>
                        {options.map((option: string) => (
                          <option value={option} key={option}>
                            {option}
                          </option>
                        ))}
                      </InputSelect>
                    );
                  }
                }
              )}
              <div>
                <button className="secondary" type="submit">
                  {nameButton}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
