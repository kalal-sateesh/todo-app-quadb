import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const AppHeader = () => {
  const { isAuth, logoutHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    logoutHandler();
  };

  return (
    <header>
      <nav className="w-[100%] h-[80px] flex justify-evenly items-center text-white bg-slate-700 fixed top-0">
        <h1 className="text-xl">TODO APPLICATION</h1>
        {!isAuth ? (
          <button
            className="bg-white text-black pl-5 pr-5 pt-1.5 pb-1.5 hover:bg-black hover:text-white rounded-lg"
            onClick={handleLogin}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-white text-black pl-5 pr-5 pt-1.5 pb-1.5 hover:bg-black hover:text-white rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default AppHeader;
