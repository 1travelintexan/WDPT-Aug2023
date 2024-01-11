import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoading, isLoggedIn } = useContext(UserContext);
  //check first that if the page is loading
  if (isLoading) {
    return <p>Loading...</p>;
  }
  //check after loading is false, then the data has arrived
  //now check if the user is authenticated
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default IsPrivate;
