"use client";
import Image from "next/image";
import { Link } from "../../../../i18n/routing";
import { useState, useEffect } from "react";
import { getBlogs } from "../stem-with-us/services/FetchBlogs";
import moment from "moment";
import { NewspaperIcon } from "@heroicons/react/20/solid";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("blogs") === null) {
      getBlogs(setBlogs);
    } else {
      setBlogs(JSON.parse(sessionStorage.getItem("blogs")));
    }
  }, []);
  return (
    <div className=" m-5 md:m-20">
      <p className="text-white text-5xl font-bold text-center w-full my-10">
        Apolo Blog
      </p>
      <div className="hidden md:flex justify-center my-10">
        <div className="bg-gradient-to-br from-cyan-500 via-blue-800 bg-cyan-700 flex lg:w-1/2 justify-center items-center gap-10 text-white text-center font-semibold rounded-3xl  z-50 px-5 md:px-10 py-4">
          <NewspaperIcon className="hidden md:block w-20 h-20" />
          <p>
            Delve into our blogs and learn about the STEM, new technologies,
            updates on space exploration and read about curious scientific and
            engineering topics
          </p>
          <NewspaperIcon className="hidden md:block w-20 h-20" />
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-7 md:gap-5 xl:gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center">
        {blogs.map((blog, i) => (
          <li
            key={i}
            className="p-4 text-white rounded-xl w-full  bg-[#082f49] hover:scale-105 transition-all z-10"
          >
            <Link href={`/blog/${blog.id}`} className="space-y-2 relative ">
              {/* <div className='bg-white border-2 border-black w-8 h-8 rounded-full absolute -top-5 -left-5 flex items-center justify-center'>{blog.id+1}</div> */}
              <Image
                src={blog.imgURL}
                alt="blog"
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className="w-full h-48 z-10 rounded-2xl"
              />
              <p className="w-full text-xl">
                <span className="font-bold">Title:</span> {blog.title}
              </p>
              <p className="w-full text-lg">
                <span className="font-bold">Published:</span>{" "}
                {moment(blog.date).format("DD-MMMM-YYYY")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
