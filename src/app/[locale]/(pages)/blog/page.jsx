'use client'
import Image from 'next/image';
import {Link} from '../../../../i18n/routing'
import { useState, useEffect } from 'react';
import { getBlogs } from '../stem-with-us/services/FetchBlogs';
import moment from 'moment';
import { NewspaperIcon } from '@heroicons/react/20/solid';

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
        <p className='text-white text-5xl font-bold text-center w-full '>Apolo Blog</p>
        <div className='flex justify-center my-10'>

        <div className='bg-gradient-to-br from-cyan-500 via-blue-800 bg-cyan-700 flex w-1/2 justify-center items-center gap-10 text-white text-center font-semibold rounded-full  z-50 px-10'>
          <NewspaperIcon width={150} height={150} />
            <p>Delve into our blogs and learn about the STEM, new technologies, updates on space exploration and read about curious scientific and engineering topics</p>
          <NewspaperIcon width={150} height={150} />
        </div>
        </div>
        <ul className='grid grid-cols-1 gap-4 xl:gap-10 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center'>
          {blogs.map((blog, i) => (
            <li key={i} className='p-4 text-black rounded-xl w-full  bg-sky-950 hover:scale-105 transition-all z-10'>
              <Link href={`/blog/${blog.id}`} className='space-y-2 relative '>
                {/* <div className='bg-white border-2 border-black w-8 h-8 rounded-full absolute -top-5 -left-5 flex items-center justify-center'>{blog.id+1}</div> */}
                <Image src={blog.imgURL} alt='blog' width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  className="w-full h-48 z-10 rounded-2xl"/>
                <p className='w-[250px] text-white text-xl'><span className='font-bold'>Title:</span> {blog.title}</p>
                <p className='w-[250px] text-white text-lg'><span className='font-bold'>Published:</span> {moment(blog.date).format("DD-MMMM-YYYY")}</p>
              </Link>
            </li>
          ))}
        </ul>
          </div>
      )
    
  }