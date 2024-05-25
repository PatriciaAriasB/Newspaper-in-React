import { useState, useEffect } from "react";
import "./Form.scss";

export const Form = () => {
  const initialValue = {
    name: "",
    username: "",
    new: "",
    email: "",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const validateForm = () => {
      if (!data.name || !data.email) {
        setMessage("");
        setBtnDisabled(true);
      } else if (data.name.length < 3) {
        setMessage("The name must have at least 3 characters");
        setBtnDisabled(true);
      } else if (!isValidEmail(data.email)) {
        setMessage("Please enter a valid email address");
        setBtnDisabled(true);
      } else {
        setMessage("");
        setBtnDisabled(false);
      }
    };
  
    validateForm();
  }, [data]);
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    localStorage.setItem("FormData", JSON.stringify(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", data);
    setData(initialValue);
  };

  return (
    <div>
      <h2>Write your New</h2>
      <form onSubmit={handleSubmit} className="form-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Last Name"
          value={data.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />
        <input
        type="text"
        name="new"
        id="new"
        placeholder="Write your new"
        value={data.new}
        onChange={handleChange}
        />
        <input type="submit" value="Submit" disabled={btnDisabled} />
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Form;
