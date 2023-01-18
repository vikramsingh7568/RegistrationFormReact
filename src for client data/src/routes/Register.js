// import React from 'react';
import React, { useState } from "react";
import "./Register.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import usePasswordToggle from "../hooks/usePasswordToggle";
const Register = () => {
  //  creting object to set all user vlaues
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  // here we are getting all values from input field and we are setting values in name field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // onclick ke liye function
  const Register = async () => {
    const { firstName, lastName, email, phone, password } = user;
    if (firstName && lastName && email && phone && password) {
      // POST request using fetch()
      fetch("http://localhost:9000/register", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
          title: user,
        }),

        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => alert(json.message));
    } else {
      alert("alll field mandatory");
    }
  };
const [passwordInputType, ToggleIcon]=usePasswordToggle();

  // eye password visibility code 

  return (
    
    <div className="register">
      <h1> Registration </h1>
     
      <div>
      <input
        className="input-type"
        type="text"
        name="firstName"
        value={user.firstName}
        placeholder="Enter your first name"
        onChange={handleChange}
      />
     </div>

     <div>  
      <input
        className="input-type"
        type="text"
        name="lastName"
        value={user.lastName}
        placeholder="Enter your last name"
        onChange={handleChange}
      />
      </div>
      <div>
      <input
        className="input-type"
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your E-mail"
        onChange={handleChange}
      />
      </div>
      <div>
      <input
        className="input-type"
        type="text"
        name="phone"
        value={user.phone}
        placeholder="Enter your phone number"
        onChange={handleChange}
      />
      </div>
      <div>
      <input
        className="input-type"
        type={passwordInputType}
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />            
      <span className="password-toggle-icon"> {ToggleIcon}</span>
      </div>
      <button className="button-design" onClick={Register}>
        Register
      </button>
    </div>
    
  );
};
export default Register;
