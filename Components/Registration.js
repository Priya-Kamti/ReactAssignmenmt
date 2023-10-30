import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "./StoreSlices/registrationSlice";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const[errorMessages , setErrorMessages]=useState('')

  // Handling the name change
  const handleName = (e) => {
    value = e.target.value.trim(); 
    setName(value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    value = e.target.value.trim(); 
    setEmail(value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    value = e.target.value.trim(); 
    setPassword(value);
    setSubmitted(false);
  };

  // Handling the ConfirmPassword change
  const handleCpassword = (e) => {
    value = e.target.value.trim(); 
    setCpassword(value);
    setSubmitted(false);
  };
  // Handling the phone change
  const handlePhone = (e) => {
    value = e.target.value.trim(); 
    setPhone(value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validName=/^[A-Za-z]+$/;
    validEmailAddress=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    validPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (name == "") {
      setError(true);
      setErrorMessages('Please Enter Name..!!')
    }else if(!validName.test(name)){
      setError(true);
      setErrorMessages('Name must be only string..!!')
    }else  if (email == "") {
      setError(true);
      setErrorMessages('Please Enter Email..!!')
    }else if(!validEmailAddress.test(email)){
      setError(true);
      setErrorMessages('"Email Addre must be in valid formate with @ symbol"..!!')
    }else  if (phone == "") {
      setError(true);
      setErrorMessages('Please Enter Phone..!!')
    }else  if (phone.length !=10) {
      setError(true);
      setErrorMessages(' Phone must be of 10 digits..!!')
    }else  if (password == "") {
      setError(true);
      setErrorMessages('Please Enter Password.!!')
    }else if(!validPassword.test(password)){
      setError(true);
      setErrorMessages('"Password must have at least one Uppercase, lowercase, digit, special characters & 8 characters')
    }else  if (cpassword == "") {
      setError(true);
      setErrorMessages('Please Enter Confirm Password..!!')
    } else  if (cpassword != password) {
      setError(true);
      setErrorMessages('Password did not matched..!!')
    } else {
      setSubmitted(true);
      setError(false);
      dispatch(
        registerUser({
          name: name,
          email: email,
          phone: phone,
          password: password,
          cpassword: cpassword,
          register:true
        })
      );
      setCpassword('');
      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      // window.location.href = "/login";
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
        <h3> {name} you have successfully registered!! Now you can Login.</h3>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h4>**{errorMessages}</h4>
      </div>
    );
  };

  return (
    <div className="login">
      <div className="login ">
        <h1> Sign Up </h1>

        <form>
          {/* Labels and inputs for form data */}
          <div className="main-box">
            <div className="rightBox">
              <label className="label">Name : </label> <br />
              <label className="label">Email : </label>
              <br />
              <label>Phone No:</label>
              <br />
              <label className="label">Password : </label>
              <br />
              <label>Confirm Password : </label>
            </div>
            <div className="leftBox">
              <input
                type="text"
                onChange={handleName}
                className="input"
                value={name}
              ></input>
              <br />
              <input
                onChange={handleEmail}
                className="input"
                value={email}
                type="email"
                style={{ width: "200px" }}
              />
              <br />
              <input
                type="number"
                onChange={handlePhone}
                className="input"
                value={phone}
              ></input>
              <br />
              <input
                onChange={handlePassword}
                className="input"
                value={password}
                
              /><br/>
              <input
          
          onChange={handleCpassword}
          className="input"
          value={cpassword}
        ></input>
        <br />
            </div>
          </div>

          <button onClick={handleSubmit} className="btn" type="submit">
            SUBMIT
          </button>
        </form>
        <div className="messages">
        
          <p>
            {errorMessage()}
            {successMessage()}
          </p>
        </div>
      </div>

      
        
    </div>
  );
};

export default Registration;
