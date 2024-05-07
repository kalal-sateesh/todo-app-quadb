import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailReExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordReExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  const navigate = useNavigate();

  const { loginHandler } = useContext(AuthContext);

  const handleLogin = () => {
    if (!emailReExp.test(email)) {
      setEmailError("Please Enter a valid Email*");
      setTimeout(() => {
        setEmailError("");
      }, 2000);
      return;
    }
    if (!passwordReExp.test(password)) {
      setPasswordError(
        "Password must contain at least eight charecters one Uppercase letter one numaric and one special charecter*"
      );
      setTimeout(() => {
        setPasswordError("");
      }, 3000);
      return;
    }
    loginHandler();
    navigate("/");
  };

  return (
    <>
    <div className="w-[100%] h-[100px] m-auto mt-[100px] flex justify-center items-center">
        <h1 className="text-2xl">Login to view all tasks</h1>
    </div>
    <div className="m-auto w-[300px] h-[250px] bg-slate-400 rounded-lg">
      <div className="w-[100%] h-[80px] flex justify-center items-center flex-col">
        <input
          type="email"
          placeholder="Please Enter Email"
          className="w-[280px] h-[40px] rounded-md outline-none pl-3 pr-3 placeholder:text-black"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="text-red-600 h-[20px]">{emailError}</p>
      </div>
      <div className="w-[100%] h-[80px] flex justify-start items-center flex-col">
        <input
          type="password"
          placeholder="Please Enter password"
          className="w-[280px] h-[40px] rounded-md outline-none pl-3 pr-3 placeholder:text-black"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-600 text-xs pl-3 pr-3  h-[40px]">
          {passwordError}
        </p>
      </div>
      <div className="w-[100%] h-[80px] flex justify-center items-center">
        <button
          className="bg-blue-600 text-white pl-5 pr-5 pt-3 pb-3 rounded-lg hover:bg-white hover:text-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;
