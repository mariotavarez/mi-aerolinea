// React Redux
import { useSelector } from "react-redux";
// Formik
import { Form, Formik } from "formik";
// Yup
import * as Yup from "yup";
// Shared
import { InputSelect, InputText } from "../inputs";
import { Button } from "..";
// Models
import { FormModel } from "../../../interfaces/forms/FormModel";
import { useEffect, useState } from "react";

/**
 * @author Mario Tavarez
 * @date 03/01/2022
 * @type Shared
 * @description Form Generator, this component generate a form automatically with formik
 * @returns
 */
export const FormGenerator = ({
  nameButton,
  icon,
  jsonStructure,
  rows = 1,
  onChildClick,
  typeBtn = "submit",
  setValueForm,
}: FormModel) => {
  // Initial Values
  const initialValues: { [key: string]: any } = {};
  // Requited Fields
  const requiredFields: { [key: string]: any } = {};

  const { ciudades } = useSelector((state: any) => state.searchAction);
  const [form, setForm] = useState<any[]>([]);

  useEffect(() => {
    setForm(ciudades);
  }, [ciudades]);

  //   Agrega los valores iniciales obtenidos del form json
  for (const { name, value, validations } of jsonStructure) {
    initialValues[name] = value;
    // If no has validations then continue the process
    if (!validations) continue;

    let schema = Yup.string();

    for (const validation of validations) {
      // Si es required
      if (validation.type.includes("required")) {
        schema = schema.required("El campo es requerido");
      }
      // Si es minLength
      if (validation.type.includes("minLength")) {
        schema = schema.min(
          validation.value,
          `El campo debe tener al menos ${validation.value} caracteres`
        );
      }
      // Si es email
      if (validation.type.includes("email")) {
        schema = schema.email("El campo debe ser un email válido");
      }
    }
    requiredFields[name] = schema;
  }
  // Set Validation Schema
  const validationSchema = Yup.object({ ...requiredFields });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          onChildClick(true);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <div
              className={`${
                rows !== 1 ? "form-group-two-rows" : "form-group-one-row"
              }`}
            >
              {jsonStructure.map(
                ({
                  name,
                  type,
                  label,
                  options: optionsInput,
                  dynamic,
                  placeholder,
                }: any) => {
                  // Validate if the input type is a: text, date, number or date
                  if (
                    type.includes("text") ||
                    type.includes("date") ||
                    type.includes("number") ||
                    type.includes("email") ||
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
                        {/* If is dynamic */}
                        {/* {dynamic && setForm(ciudades)} */}
                        {/* If the state has charged */}
                        {dynamic && form && form.length > 0
                          ? form.map((ciudad: any) => (
                              <option value={ciudad.nombre} key={ciudad.nombre}>
                                {ciudad.nombre}
                              </option>
                            ))
                          : optionsInput.map((option: any) => (
                              <option value={option} key={option}>
                                {option}
                              </option>
                            ))}
                      </InputSelect>
                    );
                  }
                }
              )}
              {/* ACTION BUTTON */}
              <div>
                <Button
                  type={"secondary"}
                  typeBtn={typeBtn}
                  text={nameButton}
                  icon={icon}
                  onChildClick={setValueForm(formik.values)}
                />
              </div>
              {/* ACTION BUTTON */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
