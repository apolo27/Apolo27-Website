'use client'
import Image from 'next/image';
import {Link} from '../../../../i18n/routing'
import { useState, useEffect } from 'react';
import { getBlogs } from '../stem-with-us/services/FetchBlogs';

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
      <div className='m-20'>
        <p className='text-white text-5xl font-bold text-center w-full mb-10'>Apolo Blog</p>
        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center'>
          {blogs.slice(0,3).map((blog, i) => (
            <li key={i} className='p-4 text-black rounded-xl w-fit bg-sky-950 hover:border-2 hover:border-transparent hover:animate-border'>
              <Link href={`/blog/${blog.id}`} className='space-y-2 relative '>
                <div className='bg-white border-2 border-black w-8 h-8 rounded-full absolute -top-5 -left-5 flex items-center justify-center'>{blog.id+1}</div>
                <Image src={blog.imgURL} alt='blog' width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-48 z-10 rounded-2xl"/>
                <p className='w-[250px] text-white'><span className='font-bold'>Title:</span> {blog.title}</p>
              </Link>
            </li>
          ))}
        </ul>
          </div>
      )
    
  }