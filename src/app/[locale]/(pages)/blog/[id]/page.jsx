import Blog from "./PageComponent";

export async function generateStaticParams() {
  const blogs = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default function Page({ params }) {
  return <Blog params={params} />;
}
