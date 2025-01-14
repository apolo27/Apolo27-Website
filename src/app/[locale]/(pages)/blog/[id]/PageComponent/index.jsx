"use client";
import { useRouter } from "../../../../../../i18n/routing";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { getBlogs } from "../../../stem-with-us/services/FetchBlogs";

export default function Blog({ params }) {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    if (sessionStorage.getItem("blogs") === null) {
      getBlogs(setBlogs);
    } else {
      setBlogs(JSON.parse(sessionStorage.getItem("blogs")));
    }
    setBlog(blogs[params.id]);
  }, [params, blogs]);

  return (
    <div className="m-20 grid grid-cols-1 gap-4 md:grid-cols-4 justify-center justify-items-center">
      <div className="blog col-span-3 space-y-3">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl text-black bg-white hover:bg-slate-100 hover:pointer"
        >
          <ArrowLeftIcon className="h-8 w-8" />
        </button>
        <div className="p-5 rounded-2xl bg-cyan-900 space-y-3">
          <div className="w-full rounded-2xl bg-gray-400 h-60"></div>
          <div className="text-white p-2 bg-cyan-950 rounded-2xl">
            <p className="font-bold text-3xl">{blog.title}</p>
            {
              blog.content.map((item, i) => (
                <p key={i} className="font-medium text-md mb-2">{item}</p>
              ))
            }
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <p className="text-white">other blogs</p>
      </div>
    </div>
  );
}
