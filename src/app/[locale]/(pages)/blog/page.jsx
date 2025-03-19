"use client";
import Image from "next/image";
import { Link } from "../../../../i18n/routing";
import { useState, useEffect } from "react";
import { getBlogs } from "../stem-with-us/services/FetchBlogs";
import { useFormatter, useTranslations } from "next-intl";

export default function BlogsPage() {
  const t = useTranslations("Blogs");
  const format = useFormatter();
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
      <p className="text-3xl md:text-5xl text-center font-bold text-white mb-3">
        {t("pageTitle")}
      </p>

      <p className="text-white font-medium text-md lg:text-lg text-center mx-10 max-w-[1225px] lg:mx-auto ">
        {t("subtitle")}
      </p>
      <hr className="my-8 max-w-[1225px] mx-auto " />

      <ul className=" max-w-[1225px] mx-auto grid grid-cols-1 gap-7 md:gap-5 xl:gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center">
        {blogs.map((blog, i) => (
          <li
            key={i}
            className="p-4 text-white rounded-xl w-full  bg-[#082f49] hover:scale-105 transition-all z-10"
          >
            <Link href={blog.blogURL} className="space-y-2 relative ">
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
                <span className="font-bold">{t("title")}</span>{blog.title}
              </p>
              <p className="w-full text-lg">
                <span className="font-bold">{t("published")}</span>{" "}
                
                {format.dateTime(new Date(blog.date), {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
