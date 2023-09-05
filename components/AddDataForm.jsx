"use client";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddDataForm = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      const data = new FormData(e.target);
      const { title, category, date, client, url, image, desc, github } =
        Object.fromEntries(data.entries());
      formData.append("title", title);
      formData.append("category", category);
      formData.append("date", date);
      formData.append("client", client);
      formData.append("url", url);
      formData.append("github", github);
      formData.append("image", image);
      formData.append("desc", desc);
      const response = await axios.post(`/api/get-work`, formData);
      if (response?.data?.success) router.push("/works");
      if (response?.data?.error) setError(response?.data?.error);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    axios.get(`/api/get-cookie`).then((res) => {
      if (!res?.data?.cookie) router.push("/works");
    });
  }, [router]);
  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center bg-slate-100">
        <form
          method="post"
          encType="multipart/form-data"
          onSubmit={submit}
          className="bg-white p-2 my-4 sm:p-4 rounded-md sm:w-[40rem] mx-2 sm:mx-0"
        >
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="text"
            name="title"
            placeholder="Title"
            required={true}
          />
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="text"
            name="category"
            placeholder="Category"
            required={true}
          />
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="date"
            name="date"
            placeholder="Date"
            required={true}
          />
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="text"
            name="client"
            placeholder="Client"
            required={true}
          />
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="text"
            name="url"
            placeholder="Project URL (Optional)"
          />
          <input
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            type="text"
            name="github"
            placeholder="Github URL"
            required={true}
          />
          <textarea
            className="p-1 border-[1px] outline-none focus:border-yellow-500 text-sm sm:text-lg w-full my-2"
            name="desc"
            id=""
            cols="30"
            rows="5"
            placeholder="Description"
            required={true}
          ></textarea>
          <label
            className="bg-slate-200 my-2 font-semibold cursor-pointer text-[#555] text-sm sm:text-lg px-4 py-2 block"
            htmlFor="image"
          >
            Select image
          </label>
          <input
            type="file"
            className="hidden"
            name="image"
            id="image"
            required={true}
          />
          <button
            disabled={loading}
            className="px-4 py-2 bg-yellow-500 text-white text-sm md:text-xl hover:bg-yellow-300 hover:border-yellow-500 border2 my-2"
          >
            {loading ? "Loading" : "Submit"}
          </button>
          {error ? (
            <div className="py-2 text-center bg-red-200 px-2">
              <h1 className="text-sm sm:text-lg text-center text-red-500">
                {error}
              </h1>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </>
  );
};

export default AddDataForm;
