import { Link } from "react-router-dom";

function HomePage({ students }) {
  return (
    <div>
      <h2>HomePage </h2>
      <Link to="/about">Go to About Page</Link>
      {students.map((oneStudent) => {
        return (
          <Link
            key={oneStudent.id}
            to={`/wizard?name=${oneStudent.name}&bestDog=Ragnar&studentId=${oneStudent.id}`}
          >
            <h3>{oneStudent.name}</h3>
          </Link>
        );
      })}
      {/* <Link to="/wizard/Ron">
        <h3>Ron</h3>
      </Link>
      <Link to="/wizard/Draco">
        <h3>Draco</h3>
      </Link> */}
    </div>
  );
}
export default HomePage;
