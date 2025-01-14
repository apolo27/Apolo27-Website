import Image from 'next/image';
import {Link} from '../../../../i18n/routing'

async function getBlogs() {
 return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

}

export default async function BlogsPage() {
    const blogs = await getBlogs()
    return (
      <div className='m-20'>
        <p className='text-white text-5xl font-bold text-center w-full mb-10'>Apolo Blog</p>
        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center justify-items-center'>
          {blogs.slice(0,9).map((blog) => (
            <li key={blog.id} className='p-4 text-black rounded-xl w-fit bg-sky-950 hover:border-2 hover:border-transparent hover:animate-border'>
              <Link href={`/blog/${blog.id}`} className='space-y-2'>
                <Image src='/images/250.webp' width={250} height={250} alt='blog' className='rounded-xl'/>
                <p className='w-[250px] text-white'><span className='font-bold'>Title:</span> {blog.title}</p>
              </Link>
            </li>
          ))}
        </ul>
          </div>
      )
    
  }