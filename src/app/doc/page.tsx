import { getPosts } from "https://jsonplaceholder.typicode.com/posts";
import { Post } from "@/ui/post";

export default async function Page() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
