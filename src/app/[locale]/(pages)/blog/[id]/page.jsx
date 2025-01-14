export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Page({ params }) {
  const id = (await params).id;
  return (
    <div>
      <p className="text-white">My Post: {id}</p>
    </div>
  );
}
