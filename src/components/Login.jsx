import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setloginData] = useState("");
  const [login, setlogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    let { value, username, password, type } = e.target;
  };

  const gogoorder = (e) => {
    let name,
      value,
      type,
      checked = e.target;

    e.preventDefault();
    axios.post("http://localhost:8000/user", loginData);
  };

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
        value={login.name}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={login.password}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={gogoorder} className="submit">
        Login
      </button>
    </div>
  );
};
