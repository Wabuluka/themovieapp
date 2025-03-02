import { Form, Formik } from "formik";
import { FormControl } from "../../components/form/FormControl";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { Link } from "react-router";

export function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-6 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Login to continue.</p>
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
        <div className="d-flex justify-content-between">
          <p className="pt-3 lead">
            Please <Link to={"/register"}>register</Link> to get better
            services.{" "}
          </p>
          <p className="pt-3 lead">
            <Link to={"/forgot"}>Forgot Password</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
