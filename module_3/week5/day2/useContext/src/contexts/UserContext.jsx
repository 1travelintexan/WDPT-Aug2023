import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const UserContext = createContext();

const UserContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //this a function to get the token from the local storage
  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  //the function that verifies the users token
  //grab the token from storage and send it in the headers
  const authenticateUser = async () => {
    const theToken = getToken();
    //check if there is a token, and then we valid the token
    if (theToken) {
      try {
        const response = await fetch("http://localhost:5005/auth/verify", {
          method: "GET",
          headers: {
            authorization: `Bearer ${theToken}`,
          },
        });
        const parsed = await response.json();
        console.log("User was verified", parsed);
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(parsed.user);
      } catch (err) {
        //this is where the token does exists but was not accepted by the server
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);
        console.log("Server rejected the token");
      }
    } else {
      //if there was no token then we need to say the user is not logged in and the page is not loading
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
      console.log("there was no token in the storage");
    }
  };

  //the logout function
  const handleLogout = () => {
    //remove token from local storage
    localStorage.removeItem("authToken");
    setUser(null);
    setIsLoggedIn(false);
    navigate("/login");
  };
  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        getToken,
        isLoggedIn,
        setIsLoggedIn,
        isLoading,
        user,
        setUser,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextWrapper };
