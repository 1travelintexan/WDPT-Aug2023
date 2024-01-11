import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { user, handleLogout } = useContext(UserContext);
  return (
    <div>
      <h1> {user && user.name}'s Profile</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
export default Profile;
