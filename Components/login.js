import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "./StoreSlices/loggedInSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessage] = useState("");
  const[register,setRegister] =useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  //Subscribing to the store to get user

  const users = useSelector((store) => store.registerUser.users);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
      setErrorMessage("Fill all the inputs");
    } else {
      users.map((user) => {
        if (user.email != email) {
          setError(true);
          setErrorMessage("Email does not exist...");
        } else if (user.password != password) {
          setError(true);
          setErrorMessage("Password did not match...");
        } else {
          setSubmitted(true);
          setError(false);
          dispatch(loggedInUser({ loggedIn: true, name: user.name }));
          //  window.location.href = "/";
         if(user.register){
          setRegister(true);
          navigate('/')
         }else
            navigate(-1);
        }
      });
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h4>User {name} successfully Logged In !!</h4>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = (errorMessage) => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h4> *Error : {errorMessages}</h4>
      </div>
    );
  };

  return (
    <div className="login ">
      <h1> Sign In </h1>

      <form>
        {/* Labels and inputs for form data */}
        <div className="main-box">
          <div className="rightBox">
            <label className="label">Email : </label>
            <br />
            <label className="label">Password : </label>
          </div>
          <div className="leftBox">
            <input
              onChange={handleEmail}
              className="input"
              value={email}
              type="email"
              style={{ width: "200px" }}
            />
            <br />
            <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
            />
          </div>
        </div>

        <button onClick={handleSubmit} className="btn" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="messages">
        <br />
        <h3>
          {register?'':<Link to={"/registration"}>Register..!!!</Link>}
          
        </h3>
        <br />
        <p>
          {errorMessage()}
          {successMessage()}
        </p>
      </div>
    </div>
  );
};

export default Login;
