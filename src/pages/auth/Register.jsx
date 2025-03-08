import { Link } from "react-router";
import { DefaultButton } from "../../components/buttons/DefaultButton";
import { FormControl } from "../../components/form/FormControl";
import { Form, Formik } from "formik";

export function Register() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className="d-flex justify-content-center align-items-center authorization-page">
      <div className="col-lg-8 col-md-12 col-sm-12 mx-auto">
        <p className="lead left">Register to continue.</p>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => {
            return (
              <Form>
                <div className="row">
                  <div className="col-lg-6">
                    <FormControl
                      name="firstName"
                      control="input"
                      placeholder="First Name"
                      type="text"
                    />
                  </div>
                  <div className="col-lg-6">
                    <FormControl
                      name="lastName"
                      control="input"
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                </div>
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
                <DefaultButton type="submit" label="Register" />
              </Form>
            );
          }}
        </Formik>
        <p className="pt-3">
          Please <Link to={"/login"}>login</Link> to get better services.{" "}
        </p>
      </div>
    </div>
  );
}
