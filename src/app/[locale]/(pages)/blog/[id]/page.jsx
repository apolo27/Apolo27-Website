import Blog from "./PageComponent";
import { getBlogs } from "../../stem-with-us/services/FetchBlogs";

export async function generateStaticParams() {
  return [{ id: '0' }, { id: '1' }, { id: '2' }]
}

export default async function Page({ params }) {
  const {id} = await params
  return <Blog id={id} />;
}
