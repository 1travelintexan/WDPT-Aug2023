import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      <h2>AboutPage</h2>
      <Link to="/">
        <img
          //   style={{ height: "100px" }}
          width={"100px"}
          src="https://images.unsplash.com/photo-1525081905268-fc0b46e9d786?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="back arrow "
        />
      </Link>
    </div>
  );
}
export default AboutPage;
