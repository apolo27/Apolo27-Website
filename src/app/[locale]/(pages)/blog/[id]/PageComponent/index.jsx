"use client";
import { Link, useRouter } from "../../../../../../i18n/routing";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import { getBlogs } from "../../../stem-with-us/services/FetchBlogs";
import Image from "next/image";
import { Skeleton } from "@mui/material";

export default function Blog({ id }) {
  const router = useRouter();
  const [blog, setBlog] = useState({});
  const [otherBlogs, setOtherBlogs] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("blogs") === null) {
      getBlogs();
    }
    setBlog(
      JSON.parse(sessionStorage.getItem("blogs")).find(
        (x) => x.id === parseInt(id)
      )
    );

    setOtherBlogs(JSON.parse(sessionStorage.getItem("blogs")).filter((x) => x.id !== parseInt(id)))
  }, [id]);

  return (
    <div className="m-20 grid grid-cols-1 gap-4 md:grid-cols-4 justify-center justify-items-center">
      <div className="blog col-span-3 space-y-3 z-50">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-xl text-black bg-white hover:bg-slate-100 hover:pointer"
          >
            <ArrowLeftIcon className="h-8 w-8" />
          </button>
          <p className="font-semibold text-4xl text-white"><span className="font-extrabold">Blog:</span> {blog.title}</p>
        </div>
        <div className="p-5 xl:p-8 rounded-2xl bg-cyan-900 space-y-3">
          {/* <div className="w-full rounded-2xl bg-gray-400 h-60"></div> */}
          <div className="flex justify-center">
            {blog.imgURL ? (
              <Image
                src={blog.imgURL}
                alt="portadeishon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "contain" }}
                className="rounded-2xl w-fit h-96"
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={0}
                height={0}
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="rounded-2xl w-full h-full"
              />
            )}
          </div>
          <div className="text-white p-5 bg-cyan-950 rounded-2xl space-y-2">
            {/* <p className="font-bold text-3xl">{blog.title}</p> */}
            {blog &&
              blog.content &&
              blog.content.filter(element => element !== "").filter(element => element !== " ").map((element, i) => {
                return (
                  <p key={i} className="font-medium text-md">
                    &#8226;{element}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
      <div className="md:col-span-1">
        <p className="text-white font-semibold text-xl px-4">You might be interested in...</p>
        <ul className="text-white space-y-10 mt-10 mx-5">

        {
          otherBlogs.map((otherBlog, i) => {
            return (
              <Link key={i} className="flex items-center gap-5 bg-cyan-950 p-4 rounded-xl ">
                <Image 
                  src={otherBlog.imgURL}
                  alt={`${otherBlog.title} image`}
                  width={100}
                  height={100}
                  className="rounded-xl"
                  />
                  <p className="font-semibold">{otherBlog.title}</p>
              </Link>
            )
          })
        }
        </ul>
      </div>
    </div>
  );
}
