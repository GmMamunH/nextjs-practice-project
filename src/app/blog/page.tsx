"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-2">
        Client-Side Rendering
      </h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6">
        {blogs.map((blog: any) => (
          <li key={blog.id}>
            <div className="shadow-lg p-4 border rounded-lg">
              <Link href={`/blog/${blog.id}`}>
                <h2 className="line-clamp-2 text-2xl font-medium cursor-pointer">
                  {blog.title}
                </h2>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;
