/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const initialAuth =
  localStorage.getItem("isAuth") != null
    ? localStorage.getItem("isAuth") === "true"
    : false;

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(initialAuth);

  const loginHandler = () => setIsAuth(true);
  const logoutHandler = () => setIsAuth(false);

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
