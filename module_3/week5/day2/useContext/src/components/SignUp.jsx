import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const nav = useNavigate();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(form);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5005/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const parsed = await response.json();
    console.log("parsed", parsed);
    nav("/login");
  };
  return (
    <>
      <h1>Signup with Us!</h1>
      <Link to="/login">Login</Link>
      <form onSubmit={handleSignUp}>
        <label>
          Name:
          <input name="name" value={form.name} onChange={handleChange} />
        </label>
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
        <button>Sign Up</button>
      </form>
    </>
  );
}
export default SignUp;
