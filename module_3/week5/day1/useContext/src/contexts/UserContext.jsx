import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

const UserContextWrapper = ({ children }) => {
  const [user, setUser] = useState("Ragnar");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserContextWrapper };
