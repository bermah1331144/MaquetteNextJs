import { fetchDetailsPublication } from "@/app/actions"; 
import BlogDetails from "@/app/components/BlogDetails"; 

export default async function Page({ params }) {
  const blogId = params.id;

  const blog = await fetchDetailsPublication(blogId); 

  if (!blog) {
    return <div>Blog introuvable</div>;
  }

  return (
    <div className="container mt-4">
      <BlogDetails blog={blog} />
    </div>
  );
}