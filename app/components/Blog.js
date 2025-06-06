"use client";

import BlogDetails from "./BlogDetails";
import AddComment from "./AddComment";
import CommentList from "./CommentList";


export default function Blog() {

    const params = new URLSearchParams(window.location.search);
    const blogId = params.get("id");

    return (
    <>
        <BlogDetails blogId={blogId}/>

        <AddComment blogId={blogId}/>

        <CommentList blogId={blogId}/>
    </>
    )
}