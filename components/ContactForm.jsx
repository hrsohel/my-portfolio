"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";

const ContactForm = () => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const formData = new FormData();
    const data = new FormData(e.target);
    const { name, email, subject, message } = Object.fromEntries(
      data.entries()
    );
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    const response = await axios.post(`/api/send-message`, formData);
    if (response?.data?.error) {
      setError(response?.data?.error);
    }
    if (response?.data?.message) {
      alert(response?.data?.message);

      setLoading(false);
    }
  };
  React.useEffect(() => {}, []);
  return (
    <>
      {loading ? (
        <div>
          <div className="h-[50vh] flex items-center justify-center">
            <Image
              src="/images/loader.svg"
              width="80"
              height="80"
              alt="Loader"
            />
          </div>
        </div>
      ) : (
        <form onSubmit={submit}>
          <input
            type="text"
            className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
            placeholder="Your name"
            required={true}
            name="name"
          />
          <input
            type="email"
            className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
            placeholder="Your email"
            required={true}
            name="email"
          />
          <input
            type="text"
            className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
            placeholder="Subject"
            required={true}
            name="subject"
          />
          <textarea
            className="p-1 text-sm sm:text-lg border-[1px] outline-none my-3 border-black focus:border-yellow-500 w-full"
            cols="30"
            rows="5"
            required={true}
            placeholder="Message"
            name="message"
          ></textarea>
          <button
            className={` px-2 py-[.1rem] text-lg sm:text-xl  bg-yellow-500 text-white ${
              loading ? "bg-yellow-400 border-yellow-200" : "bg-yellow-500"
            } hover:bg-yellow-400 hover:border-yellow-200 border-4 border-transparent`}
          >
            {loading ? "Sending message" : "Send message"}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
