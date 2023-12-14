import { useParams, useSearchParams, Link } from "react-router-dom";

function DetailsPage({ students }) {
  const { wizardId } = useParams();
  const [student, setStudent] = useSearchParams();
  const studentName = student.get("name");
  const dogName = student.get("bestDog");
  const studentId = student.get("studentId");
  console.log("student Id", studentId);

  const filteredWizard = students.find((oneStudent) => {
    if (oneStudent.id == studentId) {
      return true;
    }
  });
  console.log("here is your found wizard", filteredWizard);

  return (
    <div>
      <Link to="/">
        <h3>Home</h3>
      </Link>

      <h2>{studentName}'s Details Page </h2>
    </div>
  );
}
export default DetailsPage;
