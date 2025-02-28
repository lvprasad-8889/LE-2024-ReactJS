import { useState, useRef } from "react";
import "./Login.css";

// dont repeat code, just reuse the code
const Login = () => {
  let [formData, setFormData] = useState({
    formSubmitted: false,
    passwordVisibilty: false,
  });

  // directly fetched value entered in the dom without rerendering
  let username = useRef();
  let password = useRef();

  const changeFormData = (event) => {
    let {name, value} = event.target;

    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });

  };

  const showPassword = (event) => {
    event.preventDefault();
    setFormData({
        ...formData, passwordVisibilty: !formData.passwordVisibilty
    })
  }

  const signIn = (event) => {
    event.preventDefault();

    console.log("username is: ",username.current.value);
    console.log("password is: ", password.current.value)
    setFormData({
      ...formData,
      formSubmitted: true,
    });
    if (formData.username == "lvprasad" && formData.password == "lvprasad") {
      alert("login Successfulll");
    } else {
      alert("please enter username or password");
    }
  };

  console.log("I am rerendering....")

  return (
    <div className="login container">
      <form>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              ref = {username}
            />
            {formData.formSubmitted && username.current.value.length === 0 && (
              <div className="text-danger">Please enter username</div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type= {formData.passwordVisibilty ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              ref = {password}
            />
            {formData.formSubmitted && password.current.value.length === 0 && (
              <div className="text-danger">Please enter password</div>
            )}

            <button
              className="btn btn-primary d-none"
              onClick={showPassword}
            >
              {formData.passwordVisibilty ? "Hide Password" : "Show Password"}
            </button>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={signIn}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
