import "../styles/Form.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const methodName = method === "login" ? "Login" : "Register";

  const handleSumbit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const payload =
        method === "register"
          ? { username, password, email }
          : { username, password };

      const res = await api.post(route, payload);
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="form-title">{methodName}</h1>
      <form className="form-container" onSubmit={(e) => handleSumbit(e)}>
        <input
          className="form-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {method === "register" && (
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="form-button" type="submit">
          {methodName}
        </button>
      </form>
    </>
  );
}

export default Form;
