import Link from "next/link";
import React from "react";

const BlogsNavBar = () => {
  const navList = [
    { catName: "Home", path: "/" },
    {
      catName: "About",
      path: "/about",
    },
  ];
  return (
    <header className="bg-gray-500 py-4 px-6 h-screen fixed left-0">
      <h1 className="text-2xl text-white">BlogsLayout</h1>

      <nav>
        {navList.map((item) => (
          <ul className="list-none" key={item.catName}>
            <li className="my-2">
              <Link href={item.path} className="text-white hover:text-gray-800">
                {item.catName}
              </Link>
            </li>
          </ul>
        ))}
      </nav>
    </header>
  );
};

export default BlogsNavBar;
