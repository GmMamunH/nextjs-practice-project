"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
type blogsType={
  id: number;
  title: string;
  body: string; 
}
const BlogsPage = () => {
  const { blogsId } = useParams();
  const [blog, setBlog] = useState<blogsType | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${blogsId}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        document.title = `${data.title} - My Blog`; // 🔹 Set dynamic title
      });
  }, [blogsId]);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <div className="p-6 text-lg">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
        <p className="mt-4">{blog.body}</p>
      </div>
    </>
  );
};

export default BlogsPage;
