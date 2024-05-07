import { useNavigate } from "react-router-dom";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [navigate, isAuth]);
  return (
    <>
      <TaskInput />
      <TaskList />
    </>
  );
};

export default HomePage;
