"use client";
import React from "react";

const Button = ({ loading }) => {
  return (
    <>
      <button
        disabled={loading}
        className={`px-4 py-2 sm:text-lg text-sm bg-yellow-500 text-white ${
          loading ? "bg-yellow-300" : "bg-yellow-500"
        } hover:bg-yellow-300`}
      >
        {loading ? "Please wait" : "Login"}
      </button>
    </>
  );
};

export default Button;
