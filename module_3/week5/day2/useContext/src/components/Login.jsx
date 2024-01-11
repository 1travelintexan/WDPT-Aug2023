import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const { setIsLoggedIn, setUser, authenticateUser } = useContext(UserContext);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5005/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const parsed = await response.json();
      console.log("the response", response);
      //put the token into safe keeping (local storage)
      localStorage.setItem("authToken", parsed.authToken);
      await authenticateUser();
      if (response.status === 200) {
        nav("/profile");
      } else {
        nav("/login");
      }
    } catch (err) {
      console.log("Error while logging in", err);
      nav("/login");
    }
  };
  return (
    <>
      <h1>Please Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input name="email" value={form.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
      </form>
    </>
  );
}
export default Login;
