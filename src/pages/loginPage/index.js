import style from "./login-style.module.css";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../services";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const { setUserStatus } = useContext(UserContext);

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loginResponse = await loginRequest(data);
    sessionStorage.setItem("accessToken", loginResponse[1]?.accessToken);
    loginResponse[0].status === 200
      ? handleLogin(loginResponse[1]?.roles[0])
      : alert("Smth Wrong!");
  };

  const handleLogin = (userStatusFromResponse) => {
    setUserStatus(userStatusFromResponse);
    navigate("/");
  };

  const handleSignUp = () => {
    navigate("/registration");
  };

  return (
    <div className={style.loginPage}>
      <div className={style.loginFormBackground}></div>

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className={style.loginForm}
      >
        <h3>Authorization</h3>

        <label htmlFor="email"> Email </label>
        <input
          id="email"
          type="text"
          {...register("email", { required: true })}
          placeholder="Email"
          name="email"
          required
        />

        <label htmlFor="password"> Password </label>
        <input
          id="password"
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
          name="password"
        />
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
