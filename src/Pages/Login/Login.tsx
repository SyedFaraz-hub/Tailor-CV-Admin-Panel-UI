import React from "react";
import { LoadingButton, LoginInput } from "../../Components";
import { loginBgImg } from "../../utils/Images";

const Login = () => {
  return (
    <div className="bg-body w-screen:90vh h-[100vh] grid max-sm:grid-cols-2 grid-cols-3 relative">
      <div className="max-sm:hidden flex items-center">
        <img
          src={loginBgImg}
          alt=""
          className="absolute top-auto bottom-auto h-[90vh] w-[260px] sm:w-[300px] lg:w-[380px] md:w-[330px] md:h-[96vh]"
        />
      </div>
      <div className=" col-span-2 flex flex-col justify-center items-center">
        <div className="p-10 w-290px flex flex-col justify-center">
          <p className="text-center text-4xl pb-10 text-white">
            <span className="text-headingColor">Tailor</span> CV
          </p>
          <p className="text-3xl text-white text-center ">
            Welcome back! Sign in
          </p>
        </div>
        <div className="p-4 w-290px flex flex-col justify-center">
          <LoginInput type="email" placeholder="Email" />
          <LoginInput
            type="password"
            placeholder="Password(protected)"
            passwordInput={true}
          />
          <p className="text-center text-headingColor">
            <span className="cursor-pointer">Forgot Password?</span>
          </p>
        </div>
        <div className="p-4 w-290px flex flex-col justify-center">
          <LoadingButton text="Sign In" />
        </div>
      </div>
    </div>
  );
};

export default Login;
