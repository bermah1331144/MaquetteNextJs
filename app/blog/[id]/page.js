
import BlogDetails from "@/app/components/BlogDetails"; 
import {fetchDetailsPublication} from "../../actions";
import AddComment from "@/app/components/AddComment";
import CommentList from "@/app/components/CommentList";


export default async function Page({ params }) {
  const blogId = params.id;

  const blog = await fetchDetailsPublication(blogId); 

  if (!blog) {
    return <div>Blog introuvable</div>;
  }

  return (
    <div className="container mt-4">
      <BlogDetails blog={blog} />
      <AddComment blogId={blogId} />
      <CommentList blogId={blogId} />

    </div>
  );
}