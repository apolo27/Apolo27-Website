import Link from '../../../../i18n/routing'

async function getBlogs() {
 return await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());

}

export default async function BlogsPage() {
    const blogs = await getBlogs()
    return (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      )
    
  }