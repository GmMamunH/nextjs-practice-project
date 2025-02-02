
import BlogsNavBar from "./components/BlogsNavBar";

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-10">
        <BlogsNavBar />
        <main className="flex-grow ml-40">{children}</main>
      </div>
    </>
  );
}
