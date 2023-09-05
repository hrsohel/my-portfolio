"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const router = useRouter();
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData();
    const data = new FormData(e.target);
    const { email, password } = Object.fromEntries(data.entries());
    formData.append("email", email);
    formData.append("password", password);
    const response = await axios.post(`/api/login`, formData);
    if (response?.data?.error) setError(response.data.error);
    if (response?.data?.success) router.push("/");
    setLoading(false);
  };
  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center w-full md:w-[85%] mx-auto">
        <form onSubmit={submit} className="about p-4 rounded-md mx-2 sm:mx-0">
          <h1 className="sm:text-2xl text-xl font-semibold text-center">
            Login
          </h1>
          {error ? (
            <div className="bg-red-200 p-4 my-4 text-red-500 text-center text-2xl md:text-xl">
              <p>{error}</p>
            </div>
          ) : (
            <></>
          )}
          <input
            className="p-1 my-4 md:text-lg text-sm border-[1px] border-black outline-none focus:border-yellow-500 w-full"
            type="email"
            name="email"
            placeholder="Your email"
            required={true}
          />
          <input
            className="p-1 my-4 md:text-lg text-sm border-[1px] border-black outline-none focus:border-yellow-500 w-full"
            type="password"
            placeholder="Your password"
            name="password"
            required={true}
          />
          <Button loading={loading} />
        </form>
      </div>
    </>
  );
};

export default Login;
