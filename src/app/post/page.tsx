import Link from "next/link";

type PostType = {
  id: number; // ID সংখ্যা, তাই number ব্যবহার করা হলো
  title: string;
};

const getPosts = async (): Promise<PostType[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const PostPage = async () => {
  const posts: PostType[] = await getPosts();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-2">
        Server-Side Rendering
      </h1>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 py-6">
        {posts.slice(0, 12).map((post: PostType) => (
          <li key={post.id}>
            <div className="shadow-lg p-4 border rounded-lg">
              <Link href={`/post/${post.id}`}>
                <h2 className="line-clamp-2 text-2xl font-medium cursor-pointer">
                  {post.title}
                </h2>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
