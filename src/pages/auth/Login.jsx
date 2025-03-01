import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";

export function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {() => {
          return (
            <Form>
              <FormControl
                name="email"
                control="input"
                placeholder="Email"
                type="email"
              />
              <FormControl
                name="password"
                control="input"
                placeholder="Password"
                type="password"
              />
              <DefaultButton type="submit" label="Login" />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
