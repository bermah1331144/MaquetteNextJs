import BlogDetails from "@/app/components/BlogDetails";
import { fetchPublicationById } from "@/app/actions";   

export default async function Page({ params }) {
  const id = params.id;
  const blog = await fetchPublicationById(id);

  if (!blog) {
    return <div>Blog introuvable</div>;
  }

  return <BlogDetails blog={blog} />;
}